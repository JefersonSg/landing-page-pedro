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
  '/fotos/IMG_0499.JPG',
  '/fotos/IMG_0511.JPG',
  '/fotos/IMG_0517.JPG',
  '/fotos/IMG_0518.JPG',
  '/fotos/IMG_0558.JPG',
  '/fotos/IMG_0651.JPG',
  '/fotos/IMG_0657.JPG',
  '/fotos/IMG_0799.PNG',
  '/fotos/IMG_0799.PNG',
  '/fotos/IMG_0800.PNG'
];

const SlidePhoto = () => {
  return (
    <div className={styles.container_photos}>
      <Swiper
        className={`mySwiper`}
        effect="cards"
        modules={[EffectCards, Pagination, Navigation, Zoom]}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
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
