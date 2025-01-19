import { Home } from './pages';

import styles from './app.module.scss';

import i18n from './locales/config';
i18n.init();

const App: React.FC = () => {
  return (
    <main className={styles.container}>
      <Home />
    </main>
  );
};

export default App;
