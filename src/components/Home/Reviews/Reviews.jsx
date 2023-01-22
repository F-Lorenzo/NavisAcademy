import React from "react";
import { ReviewsContent } from "./ReviewsContent";

import "./Reviews.css";

const Reviews = () => {
  return (
    <>
      <div className="homeSection__Title">
        <h2>Reviews</h2>
      </div>

      <section className="reviews__Section">
        {ReviewsContent.map((item, index) => {
          return (
            <div className="reviews__Card" key={index}>
              <div className="reviews__Avatar">
                <img src={item.avatar} alt="User Avatar" />
              </div>
              <div className="reviews__Text">{item.text}</div>
              <div className="reviews__Author">{item.author}</div>
            </div>

          )
        })}
      </section>
    </>
  );
};

export default Reviews;