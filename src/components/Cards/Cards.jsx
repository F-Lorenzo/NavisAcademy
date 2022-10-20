import React from "react";
import "./Cards.css";
import "swiper/css";
import coh1 from "../../assets/img/cohete.svg";
import arrow1 from "../../assets/img/flechaderecha.svg";
import arrow2 from "../../assets/img/flechaizquierda.svg";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";

{
  /* <div className="arrow1">
<img src={arrow2} alt="" />
</div>
  <div className="arrow1">
  <img src={arrow1} alt="" />
</div> */
}
   
const Cards = () => {
  return (
 

    <div className="card_Content">
         <div className="paquetes__title">
     <h2> Paquetes</h2>
    </div>


      <div className="card__Container">
   
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="card__body">
              <div className="cohete">
                <img src={coh1} alt={""}></img>
              </div>
              <h2 className="box-1">Navis °1</h2>
              <span className="box-2">
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Debitis impedit, eius, repellat quae voluptates obcaecati libero
                sed blanditiis praesentium molestias incidunt, dicta facilis?
                Harum ducimus, eos atque ipsa corrupti architecto!
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card__body">
              <div className="cohete">
                <img src={coh1} alt={""}></img>
              </div>
              <h2 className="box-1">Navis °2</h2>
              <span className="box-2">
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Debitis impedit, eius, repellat quae voluptates obcaecati libero
                sed blanditiis praesentium molestias incidunt, dicta facilis?
                Harum ducimus, eos atque ipsa corrupti architecto!
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card__body">
              <div className="cohete">
                <img src={coh1} alt={""}></img>
              </div>
              <h2 className="box-1">Navis °3</h2>
              <span className="box-2">
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Debitis impedit, eius, repellat quae voluptates obcaecati libero
                sed blanditiis praesentium molestias incidunt, dicta facilis?
                Harum ducimus, eos atque ipsa corrupti architecto!
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card__body">
              <div className="cohete">
                <img src={coh1} alt={""}></img>
              </div>
              <h2 className="box-1">Navis °4</h2>
              <span className="box-2">
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Debitis impedit, eius, repellat quae voluptates obcaecati libero
                sed blanditiis praesentium molestias incidunt, dicta facilis?
                Harum ducimus, eos atque ipsa corrupti architecto!
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Cards;