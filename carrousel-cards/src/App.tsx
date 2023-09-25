// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { DataImages } from './dataImages';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function App() {
    return (
        <div className='container'>
            <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className='mySwiper'>
                {/* <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}

                {DataImages.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item.url} alt={item.id} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
