from flask import Flask, request, make_response
from flask_restful import Resource, Api
from flask import jsonify
from flask_cors import CORS, cross_origin
from preprocessing_utils import *
from machine_learning_pipeline import *

app = Flask(__name__)
api = Api(app)
CORS(app, support_credentials=True)

@app.route('/post-review', methods=["POST"])
@cross_origin(supports_credentials=True)
def post_review():
    if request.json is None:
        return "ERROR: No query was provided. Kindly include the required input"
    else:
        review = request.json['review'] if 'review' in request.json else None

        review = preprocess_review(review)

        rating_model, rating_tokenizer = load_model_tokenizer()
        rating = predict_review_rating(rating_model, rating_tokenizer, [review])

        return ({"rating": str(rating)})


if __name__ == '__main__':
    app.run(debug=True)