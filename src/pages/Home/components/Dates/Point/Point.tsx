import { IPage } from 'shared/types';

import { cx } from 'shared/utils';
import { P } from 'shared/components';

import styles from './styles.module.scss';

interface PointProps extends Pick<IPage, 'name'> {
  angle: number;
  index: number;
  activePage: number;
  changePage: () => void;
}

export const Point = ({ name, activePage, index, angle, changePage }: PointProps) => {
  const isActive = activePage === index + 1;

  return (
    <button
      className={cx(styles.container, isActive && styles.active)}
      onClick={changePage}
      disabled={isActive}
      style={{ '--angle': `${angle}deg` } as React.CSSProperties}
    >
      <P className={styles.circleText}>{index + 1}</P>
      <P className={styles.text}>{name}</P>
    </button>
  );
};
