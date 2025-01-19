import { cx } from 'shared/utils';
import styles from './styles.module.scss';

interface Props {
  slidesCount: number;
  currentSlide: number;
  onSlideChange: (i: number) => void;
}

export const PointsNavigation: React.FC<Props> = ({ slidesCount, currentSlide, onSlideChange }) => {
  return (
    <div className={styles.container}>
      {Array(slidesCount)
        .fill(null)
        .map((_, i) => (
          <button className={cx(styles.point, currentSlide === i && styles.active)} onClick={() => onSlideChange(i)} />
        ))}
    </div>
  );
};
