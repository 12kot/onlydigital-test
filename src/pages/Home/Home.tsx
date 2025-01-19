import { useState } from 'react';

import { IPage } from 'shared/types';
import { HR } from 'shared/components';
import { MOCK_PAGES } from 'shared/constants';
import { Control, Dates, Header, Slider } from './components';

import styles from './styles.module.scss';

export const Home = () => {
  const [currentPage, setCurrentPage] = useState<IPage>(MOCK_PAGES[0]);

  const handleChangePage = (i: number) => {
    console.log(i);
    const index = MOCK_PAGES.length > i - 1 && i - 1 > 0 ? i - 1 : 0;
    setCurrentPage(MOCK_PAGES[index]);
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
