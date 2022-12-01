import React from "react";
import "./Quality.css";
import reloj from "../../../assets/img/reloj.svg";
import notas from "../../../assets/img/notas.svg";
import objetivo from "../../../assets/img/objetivo.svg";
import arrow1 from "../../../assets/img/flechaderecha.svg";
import arrow2 from "../../../assets/img/flechaizquierda.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "animate.css";

const Qualitys = () => {
  return (
    <>
      <div className="quality__Title">
        {" "}
        <h2>Cualidades</h2>
      </div>
      <div className="quality_Content">
        <div className="animate__fadeInDown quality_Body">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={15}
            slidesPerView={3}
            navigation
            autoplay={{ delay: 2000, disableOnInteraction: false }}
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
                spaceBetween: 5,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 5,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 5,
              },
            }}
          >
            <SwiperSlide>
              <div className="box__1">
                <div className="box__body">
                  <div className="quality__Svg">
                    {" "}
                    <img src={reloj} alt=" " />
                  </div>
                  <div>
                    <h4>Flexible con tu tiempo</h4>
                    <span>Solo tú decides cuando estudiar.</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box__2">
                <div className="box__body">
                  <div className="quality__Svg">
                    {" "}
                    <img src={notas} alt=" " />
                  </div>
                  <div>
                    <h4> 100% interactivo</h4>
                    <span>
                      Clases guiadas y ejercicios que puedes hacer con tu
                      profesor y por tu cuenta.
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box__3">
                <div className="box__body">
                  <div className="quality__Svg">
                    {" "}
                    <img src={objetivo} alt=" " />
                  </div>
                  <div>
                    <h4>Adaptados a tus objetivos.</h4>
                    <span>
                      te preparamos para entrevistas, viajes, examen académicos,
                      TOEFL y más.
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box__2">
                <div className="box__body">
                  <div className="quality__Svg">
                    {" "}
                    <img src={notas} alt=" " />
                  </div>
                  <div>
                    <h4> Divide el inglés en 4 áreas:</h4>
                    <span>
                    hablar, escuchar, vocabulario y gramática.
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box__2">
                <div className="box__body">
                  <div className="quality__Svg">
                    {" "}
                    <img src={notas} alt=" " />
                  </div>
                  <div>
                    <h4> No es una clase normal</h4>
                    <span>
                     No es estática: juegos, roles, ejercicios y conversación.                     </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box__2">
                <div className="box__body">
                  <div className="quality__Svg">
                    {" "}
                    <img src={notas} alt=" " />
                  </div>
                  <div>
                    <h4>  -	Recursos profesionales.</h4>
                    <span>
                    Nos basamos en el método de Cambridge, la escala de inglés global.                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box__2">
                <div className="box__body">
                  <div className="quality__Svg">
                    {" "}
                    <img src={notas} alt=" " />
                  </div>
                  <div>
                    <h4>  -	Profesores altamente cualificados.</h4>
                    <span>
                    Contamos con profesores especializados en la enseñanza del inglés a niños y adultos de distintas edades.                     </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

      
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Qualitys;
