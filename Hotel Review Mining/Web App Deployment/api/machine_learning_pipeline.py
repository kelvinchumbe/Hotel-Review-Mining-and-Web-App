import pandas as pd
import numpy as np
import pickle

from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.models import load_model

def load_model_tokenizer():
    rating_model = load_model("./best_model.h5")
    rating_tokenizer = pickle.load(open("./tokenizer.pkl", "rb"))

    return rating_model, rating_tokenizer

def predict_review_rating(rating_model, rating_tokenizer, review):
    # TOKENIZE TWEETS
    sequences = rating_tokenizer.texts_to_sequences(review)
    max_sequence_len = 32
    review_text_padded_sequences = pad_sequences(sequences, maxlen=max_sequence_len, padding="post")

    relevance_preds = rating_model.predict(review_text_padded_sequences)
    relevance_preds_cat = np.argmax(relevance_preds, axis=1)

    return relevance_preds_cat[0] + 1