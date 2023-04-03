import React, { useState } from 'react';
import { QualityCards } from './QualityCards';
import './NewQualitys.css';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";


const NewQualitys = () => {

    return (
        <div>
            <div className="homeSection__Title">
                <h2>Cualidades</h2>
            </div>
            <>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    slidesPerGroup={1}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    breakpoints={{
                        780: {
                            slidesPerView: 2,
                        },
                        1198: {
                            slidesPerView: 3,
                        }
                    }}
                >
                {
                    QualityCards.map((card, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className='qualityCard-container'>
                                    <img src={card.icon} width="70" height="70" alt="icon" className='qualityCard_icon' />
                                    <div className='qualityCard_description'>
                                        <p className='qualityCard_title'>{card.title}</p>
                                        <p className='qualityCard_text'>{card.text}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
                </Swiper>
            </>
        </div>
    )

}

export default NewQualitys
