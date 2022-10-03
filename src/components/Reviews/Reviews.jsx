import React from "react";
import "./Reviews.css";

const Reviews = () => {
  return (
    <>
      <div className="review__title">
        <h2>Reviews</h2>
      </div>
      <section className="Review__Content">
        <div className="review__body">
          <div className="review-1">
            <div className="review__Content">
              <img
                src="https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553_960_720.jpg"
                alt=""
              />
            </div>
            <div className="parrafo__Body">
              <h4>Lorem ipsum dolor sit amet</h4>
              <span>consectetuer adipiscing elit, sed diam nonummy nibh.</span>
            </div>
          </div>
          <div className="review-2">
            <div className="review__Content">
              <img
                src="https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553_960_720.jpg"
                alt=""
              />
            </div>
            <div className="parrafo__Body">
              <h4>Lorem ipsum dolor sit amet</h4>
              <span> consectetuer adipiscing elit, sed diam nonummy nibh.</span>
            </div>
          </div>
        </div>

        <div className="section__2">
          <div className="review-3">
            <div className="review__Content">
              <img
                src="https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553_960_720.jpg"
                alt=""
              />
            </div>
            <div className="parrafo__Body">
              <h4>Lorem ipsum dolor sit amet</h4>
              <span> consectetuer adipiscing elit, sed diam nonummy nibh.</span>
            </div>
          </div>
          <div className="review-4">
            <div className="review__Content">
              <img
                src="https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553_960_720.jpg"
                alt=""
              />
            </div>
            <div className="parrafo__Body">
              <h4>Lorem ipsum dolor sit amet</h4>
              <span>consectetuer adipiscing elit, sed diam nonummy nibh.</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
