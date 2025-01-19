import { Point } from './Point';
import { IPage } from 'shared/types';
import { P, Counter } from 'shared/components';

import styles from './styles.module.scss';

interface Props extends Pick<IPage, 'endDate' | 'startDate' | 'name'> {
  totalValues: number;
  activePage: number;
  changePage: (i: number) => void
}

export const Dates = ({ startDate, endDate, totalValues, activePage, name, changePage }: Props) => {
  return (
    <section className={styles.container}>
      <P className={styles.blue}>
        <Counter value={startDate} initValue={1977} />
      </P>
      <P className={styles.rose}>
        <Counter value={endDate} initValue={1985} />
      </P>

      <div className={styles.circle}>
        {Array(totalValues)
          .fill(null)
          .map((_, i) => {
            const angle = (360 / totalValues) * i - (360 / totalValues) * activePage;
            return <Point key={i} index={i} angle={angle} activePage={activePage} name={name} changePage={() => changePage(i + 1)} />;
          })}
      </div>
    </section>
  );
};
