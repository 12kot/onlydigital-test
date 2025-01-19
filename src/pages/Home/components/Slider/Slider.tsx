import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

import { cx } from 'shared/utils';
import { ISlide } from 'shared/types';
import { B, P } from 'shared/components';

import { SVGLeftArrow, SVGRightArrow } from 'assets';

import styles from './styles.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';

interface Props {
  slides: ISlide[];
}

export const Slider = ({ slides }: Props) => {
  const swiperRef = useRef<SwiperType>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  return (
    <section className={styles.container}>
      {currentSlide > 0 && (
        <button className={styles.prevButton} onClick={() => swiperRef.current?.slidePrev()}>
          <SVGLeftArrow />
        </button>
      )}
      {currentSlide < slides.length - 3 && (
        <button className={styles.nextButton} onClick={() => swiperRef.current?.slideNext()}>
          <SVGRightArrow />
        </button>
      )}

      <Swiper
        spaceBetween={80}
        slidesPerView={3}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
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

interface ICardProps extends ISlide {
  inScreen: boolean;
}

const Card = ({ inScreen, date, description }: ICardProps) => {
  return (
    <div className={cx(styles.card, !inScreen && styles.opacity)}>
      <B>{date}</B>
      <P>{description}</P>
    </div>
  );
};
