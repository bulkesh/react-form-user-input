import styles from  './App.module.css';
import Card from './components/shared/Card';
import SimpleInput from './components/SimpleInput';

const App = () => {
  return (
    <Card className={styles.app}>
        <SimpleInput />
    </Card>
  );
}

export default App;
