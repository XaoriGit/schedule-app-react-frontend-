import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useAppContext } from '../../../AppContext';
import Header from '../../Header';
import ClassList from './ClassList';

import "swiper/css";

function ClassSwiper() {
    const { data } = useAppContext()

    return (
        <Swiper
            className='swiper-container'
            spaceBetween={16}
        >
            {data.schedule.map((item, index) =>
                <SwiperSlide key={index}>
                    <div className='swiper-item'>
                        <Header group={data.group} date={item.date} />
                        <ClassList classes={item.classes} />
                    </div>
                </SwiperSlide>
            )}
        </Swiper>
    );
}

export default ClassSwiper;