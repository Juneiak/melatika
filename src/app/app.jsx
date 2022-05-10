import styles from './app.module.css'
import Header from '../components/header/header';
import Welcome from '../components/welcome/welcome';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Welcome />
    </div>
  );
}

export default App;
