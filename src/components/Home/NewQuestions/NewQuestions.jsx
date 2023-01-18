import React from 'react'
import { QuestionsItems } from './QuestionsItems';
import './NewQuestions.css';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

const NewQuestions = () => {

    return (
        <div>
            <div className="homeSection__Title">
                <h2>Cualidades</h2>
            </div>
            <>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={50}
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
                    QuestionsItems.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className='questionsCard-container'>
                                    <div className='questionCard_content'>
                                        <p className='questionCard_question'>{item.question}</p>
                                        <p className='questionCard_answer'>{item.answer}</p>
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

export default NewQuestions
