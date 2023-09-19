import R3Button from '../../components/R3Button/R3Button';
import styles from './Home.module.css';

function Home() {
    return (
        <div className={styles.HomeContent}>
            <h1 className={styles.HomeH1}>we are a creative digital agency</h1>
            <h2 className={styles.HomeH2}>“Turning your ideas into reality”</h2>
            <R3Button textButton='Contact Us'/>
        </div>
    );
}

export default Home;