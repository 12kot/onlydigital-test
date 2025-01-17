import { B, P } from 'shared/components';

import styles from './styles.module.scss';

export const Slider = () => {
  return <section className={styles.container}><Card /></section>;
};

const Card = () => {
  return <div className={styles.card}>
    <B>2015</B>
    <P>13 сентября — частное солнечное<br />затмение, видимое в Южной<br />Африке и части Антарктиды</P>
  </div>
}
