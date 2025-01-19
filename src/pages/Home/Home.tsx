import gsap from 'gsap';

import { IPage } from 'shared/types';
import { HR } from 'shared/components';
import { useQueryParam } from 'shared/hooks';
import { MOCK_PAGES } from 'shared/constants';
import { Control, Dates, Header, Slider } from './components';

import styles from './styles.module.scss';

export const Home: React.FC = () => {
  const [currentPageNumber, setCurrentPageNumber] = useQueryParam<number>('page', 0);
  const currentPage: IPage = MOCK_PAGES[!Number(currentPageNumber) || currentPageNumber >= MOCK_PAGES.length ? 0 : currentPageNumber];

  const handleChangePage = (i: number) => {
    const index = MOCK_PAGES.length > i && i > 0 ? i : 0;

    gsap.to('#slider', {
      opacity: 0,
      duration: 0.2,
      onComplete: () => {
        setCurrentPageNumber(index);
        gsap.to('#slider', {
          opacity: 1,
          duration: 0.5,
        });
      },
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        <Dates
          totalValues={MOCK_PAGES.length}
          startDate={currentPage.startDate}
          endDate={currentPage.endDate}
          name={currentPage.name}
          activePage={currentPage.id}
          changePage={handleChangePage}
        />

        <div className={styles.controlContainer}>
          <Control currentValue={currentPage.id} maxValue={MOCK_PAGES.length} changePage={handleChangePage} />
          <Slider slides={currentPage.items} />
        </div>
      </div>

      <HR className={styles.borderX} />
      <HR className={styles.borderY} />
    </div>
  );
};
