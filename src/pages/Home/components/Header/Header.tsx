import { Trans } from 'react-i18next';

import { H1 } from 'shared/components';

import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.border} />
      <H1>
        <Trans i18nKey={'home:historicalDates'} components={{ br: <br /> }} />
      </H1>
    </header>
  );
};
