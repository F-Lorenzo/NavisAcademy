import React from "react";
import "./Reviews.css";

const Reviews = () => {
  return (
    <>
      <h2 className="review__title">Reviews</h2>
      <section className="Review__Content">
        <div className="review__body">
          <div className="review-1">
            <div className="review__Content">
             <img src="https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553_960_720.jpg" alt="" />
            </div>
            <div>
              <span>review texto</span>
            </div>
          </div>
          <div className="review-2">
            <div className="review__Content">
            <img src="https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553_960_720.jpg" alt="" />
            </div>
            <div>
              <span>review texto</span>
            </div>
          </div>
          <div className="review-3">
            <div className="review__Content">
            <img src="https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553_960_720.jpg" alt="" />
            </div>
            <div>
              <span>review texto</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
