import React from "react";
import "./Questions.css";
import arrow1 from "../../assets/img/flechaderecha.svg";
import arrow2 from "../../assets/img/flechaizquierda.svg";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Questions = () => {
  return (
    <>
      <div className="question__Title">
        <h2>PREGUNTAS FRECUENTES</h2>
      </div>
      <div className="question_Content">
        <div className="question_Body">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className="question__1">
                <h2>¿Qué es Navis?</h2>
                <div className="question__body">
                  <span>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetuer adipis.
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="question__2">
                <h2>¿Cuándo puedo estudiar?</h2>
                <div className="question__body">
                  <span>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="question__3">
                <h2>¿Puedo elegir o cambiar de profesor?</h2>
                <div className="question__body">
                  <span>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Questions;
