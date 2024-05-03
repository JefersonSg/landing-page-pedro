'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slidephoto.css';
import styles from './slidephoto.module.css';
import Image from 'next/image';
import { EffectCards, Navigation, Pagination, Zoom } from 'swiper/modules';

const ArrayImages = [
  '/fotos/IMG_0499.jpg',
  '/fotos/IMG_0511.jpg',
  '/fotos/IMG_0517.jpg',
  '/fotos/IMG_0518.jpg',
  '/fotos/IMG_0558.jpg',
  '/fotos/IMG_0651.jpg',
  '/fotos/IMG_0657.jpg',
  '/fotos/IMG_0799.jpg',
  '/fotos/IMG_0799.jpg',
  '/fotos/IMG_0800.jpg'
];

const SlidePhoto = () => {
  return (
    <div className={styles.container_photos}>
      <Swiper
        className={`mySwiper`}
        effect="cards"
        modules={[EffectCards, Pagination, Navigation, Zoom]}
        grabCursor={true}
        loop={true}
        slidesPerView={1}
        centeredSlides={true}
        pagination={true}
        navigation={true}
        zoom={true}
      >
        {ArrayImages.map((image) => {
          return (
            <SwiperSlide key={image}>
              <Image
                className={'fotos_slide'}
                alt="Fotos do pedro em um ensaio de fotos"
                width={430}
                height={542}
                src={image}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SlidePhoto;
