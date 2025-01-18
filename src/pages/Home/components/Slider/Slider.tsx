import { Swiper, SwiperSlide } from 'swiper/react';

import { B, P } from 'shared/components';

import styles from './styles.module.scss';

import 'swiper/css';

export const Slider = () => {
  return (
    <section className={styles.container}>
      <Swiper
        spaceBetween={5}
        slidesPerView={3}
      >
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

const Card = () => {
  return (
    <div className={styles.card}>
      <B>2015</B>
      <P>
        13 сентября — частное солнечное
        <br />
        затмение, видимое в Южной
        <br />
        Африке и части Антарктиды
      </P>
    </div>
  );
};
