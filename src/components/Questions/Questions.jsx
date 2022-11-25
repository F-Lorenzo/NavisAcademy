import React from "react";
import "./Questions.css";
import arrow1 from "../../assets/img/flechaderecha.svg";
import arrow2 from "../../assets/img/flechaizquierda.svg";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

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
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            autoplay={{ delay: 2000 }}
            loop={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 35,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 45,
              },
            }}
          >
            <SwiperSlide>
              <div className="question__1">
                <h2>¿Qué es Navis?</h2>
                <div className="question__body">
                  <span>
                    La única academia de inglés online que se enfoca en tus
                    necesidades.
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="question__2">
                <h2>¿En qué horario puedo estudiar?</h2>
                <div className="question__body">
                  <span>
                    Tu tiempo es tuyo, tu coordinas con tu profesor cuando
                    deseas ver tus clases.
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="question__3">
                <h2>¿Puedo elegir o cambiar de profesor?</h2>
                <div className="question__body">
                  <span>
                    Sí, siempre podrás escoger un profesor que se adapte a ti.
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="question__3">
                <h2>¿Qué se requiere para estudiar?</h2>
                <div className="question__body">
                  <span>
                    Lo único que necesitas es un ordenador o teléfono
                    inteligente con conexión a Internet estable, micrófono y
                    cámara.
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="question__3">
                <h2>
                  En caso de no poder asistir a una clase, ¿qué debo hacer?
                </h2>
                <div className="question__body">
                  <span>
                    4 horas antes tienes la opción de reprogramar la clase.
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="question__3">
                <h2>¿Cuánto dura la clase?</h2>
                <div className="question__body">
                  <span>
                    Dependiendo del paquete adquirido las clases pueden durar
                    entre 30 o 50 minutos.
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="question__3">
                <h2>¿Cuáles son los medios de pago?</h2>
                <div className="question__body">
                  <span>
                    Puedes pagar con tarjeta de crédito o débito a través de
                    PayPal. El pago se realizará en la moneda local del país en
                    el que estés.
                  </span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Questions;
