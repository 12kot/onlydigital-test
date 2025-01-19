import { cx } from 'shared/utils';
import { ISlide } from 'shared/types';
import { B, P } from 'shared/components';

import styles from './styles.module.scss';

interface Props extends ISlide {
  inScreen: boolean;
}

export const Card: React.FC<Props> = ({ inScreen, date, description }) => {
  return (
    <div className={cx(styles.card, !inScreen && styles.opacity)}>
      <B>{date}</B>
      <P>{description}</P>
    </div>
  );
};
