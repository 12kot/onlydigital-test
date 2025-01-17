import { Dates, Header, Slider } from './components';
import { HR } from 'shared/components';

import styles from './styles.module.scss';

export const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        <Dates />
        <Slider />
      </div>
      <HR className={styles.borderY} />
      <HR className={styles.borderX} />
    </div>
  );
};
