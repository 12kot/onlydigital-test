import { SVGLeftArrow, SVGRightArrow } from 'assets';
import styles from './styles.module.scss';

interface Props {
  slidesCount: number;
  currentSlide: number;
  openNext: () => void;
  openPrev: () => void
}

export const ButtonsNavigation: React.FC<Props> = ({ slidesCount, currentSlide, openPrev, openNext }) => {
  return (
    <>
      {currentSlide > 0 && (
        <button className={styles.prevButton} onClick={openPrev}>
          <SVGLeftArrow />
        </button>
      )}
      {currentSlide < slidesCount - 3 && (
        <button className={styles.nextButton} onClick={openNext}>
          <SVGRightArrow />
        </button>
      )}
    </>
  );
};
