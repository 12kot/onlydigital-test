import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

import { ISlide } from 'shared/types';

import { Card } from './Card';
import { PointsNavigation } from './PointsNavigation';
import { ButtonsNavigation } from './ButtonsNavigation';

import styles from './styles.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';

interface Props {
  slides: ISlide[];
}

export const Slider: React.FC<Props> = ({ slides }) => {
  const swiperRef = useRef<SwiperType>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  return (
    <section className={styles.container}>
      <ButtonsNavigation
        slidesCount={slides.length}
        currentSlide={currentSlide}
        openPrev={() => swiperRef.current?.slidePrev()}
        openNext={() => swiperRef.current?.slideNext()}
      />
      <PointsNavigation
        slidesCount={slides.length}
        currentSlide={currentSlide}
        onSlideChange={(i: number) => swiperRef.current?.slideTo(i)}
      />

      <Swiper
        spaceBetween={80}
        slidesPerView={3}
        onSwiper={(swiper: SwiperType) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper: SwiperType) => {
          setCurrentSlide(swiper.activeIndex);
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
            centeredSlidesBounds: true,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1300: {
            slidesPerView: 2,
            spaceBetween: 80,
          },
          1500: {
            slidesPerView: 3,
          },
        }}
        id="slider"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <Card inScreen={i <= currentSlide} {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};