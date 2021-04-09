import React, { Component } from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import DisplayComment from "./DisplayComment";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: {},
      comments: [
        {
          date: "March 4, 2021",
          name: "Frederick Jones",
          rating: "5",
          review:
            "Hotel was absolutely great, staff were very friendly and helpful. Loved the food (Chef Jane in the breakfast area was very generous). Room was clean and sanitized. I asked for a car to take me to the airport, they had few options. I paid for a BMW X1 and they upgraded my ride to a BMW X5. Only concern was that the AC in the room was very hot.. I tried to work it out more than once and still same result.",
          review_summary: "One night layover",
          trip_type: "Traveled as a couple",
        },

        {
          date: "March 11, 2021",
          name: "James C.",
          rating: "2",
          review:
            "Regretfully visited Villa Rosa with a paid upgrade to premium room. Unfortunately construction noise which will likely continue for some time was unbearable. Downgraded to standard room at the back but not much assistance and a meager few dollars refund, not commiserate with what was paid. Would highly suggest the property to warn of the issue in advance in all transparency rather than having disappointed and irritated guests.",
          review_summary: "The Noise",
          trip_type: "Traveled on business",
        },
      ],
    };
    this.postReview = this.postReview.bind(this);
  }

  postReview(review) {
    fetch("https://hotel-reviews-rating.herokuapp.com/post-review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cors: "no-cors",
      credentials: "same-origin",
      body: JSON.stringify({ review: review["review"] }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        review = {
          ...review,
          rating: response.rating,
        };

        // this.setState({
        //   review: review,
        // });

        this.setState({ comments: [...this.state.comments, review] });
        // this.state.comments.push(this.state.review);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const trip_types = [
      "Traveled as a couple",
      "Traveled on business",
      "Traveled with friends",
      "Traveled on vacation",
    ];

    return (
      <div className="review-page">
        <div className="header">
          <img
            src="../../assets/hotel_header_1.jpg"
            alt="Header-logo"
            className="header-image"
          />
        </div>

        <div className="comments-sect">
          <div className="input-comments">
            <Formik
              initialValues={{
                name: "",
                review: "",
                date: "",
                review_summary: "",
                trip_type: "",
              }}
              validationSchema={Yup.object({
                name: Yup.string().required(
                  "You must enter your name to post a review"
                ),
                review: Yup.string().required(
                  "You must enter a review post it"
                ),
                review_summary: Yup.string().required(
                  "You must enter areview summary to post a review"
                ),
                trip_type: Yup.string().required(
                  "You must enter thr type of trip you had"
                ),
              })}
              onSubmit={(values, { setSubmitting }) => {
                values = {
                  ...values,
                  date: new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "2-digit",
                  }).format(new Date()),
                };

                // alert(JSON.stringify(values, null, 2));
                this.postReview(values);
              }}
            >
              <Form className="form">
                <div className="form-input">
                  <label htmlFor="name" className="input-description-details">
                    Name:
                  </label>
                  <Field type="text" name="name" className="field-input" />
                  <ErrorMessage
                    name="review_summary"
                    className="form-error-messages"
                  />
                </div>

                <div className="form-input">
                  <label
                    htmlFor="review_summary"
                    className="input-description-details"
                  >
                    Review Summary:
                  </label>
                  <Field
                    type="text"
                    name="review_summary"
                    className="field-input"
                  />
                  <ErrorMessage
                    name="review_summary"
                    className="form-error-messages"
                  />
                </div>

                <div className="form-input">
                  <label htmlFor="review" className="input-description-details">
                    Review:
                  </label>
                  <Field as="textarea" name="review" className="field-input" />
                  <ErrorMessage name="review" className="form-error-messages" />
                </div>

                <div className="form-input">
                  <label
                    htmlFor="trip_type"
                    className="input-description-details"
                  >
                    Trip Type:
                  </label>
                  <Field as="select" name="trip_type" className="field-input">
                    {trip_types.map((trip_type, i) => {
                      return (
                        <option key={i} value={trip_type} className="options">
                          {" "}
                          {trip_type}{" "}
                        </option>
                      );
                    })}
                  </Field>
                  <ErrorMessage
                    name="trip_type"
                    className="form-error-messages"
                  />
                </div>

                <button type="submit" className="submit">
                  Comment
                </button>
              </Form>
            </Formik>
          </div>

          <div className="display-comments">
            <DisplayComment state={this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default Comments;
