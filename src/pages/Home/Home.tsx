import R3Button from '../../components/R3Button/R3Button';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import { useState, useEffect } from 'react';
import { useTranslationContext } from '../../LangContext';

function Home() {

    const navigate = useNavigate();

    const [h1, setH1] = useState('We are a creative digital agency');
    const [h2, setH2] = useState('“Turning your ideas into reality”');
    const [con, setCon] = useState('Contuct Us');


    const { language } = useTranslationContext();

    useEffect(() => {
        if (language) {
            setH1('Jsme kreativní software vývojáři');
            setH2('"Přivádíme vaše nápady do reality"');
            setCon('Kontaktujte Nás');
        } else {
            setH1('We are a creative digital agency');
            setH2('“Turning your ideas into reality”');
            setCon('Contact Us');
        }
    }, [language]);

    return (
        <div className={styles.homeBody}>
            <NavBar/>
            <div className={styles.HomeContent}>
                <h1 className={styles.HomeH1}>{h1}</h1>
                <h2 className={styles.HomeH2}>{h2}</h2>

                <div className={styles.btnDiv}>
                    <R3Button textButton={con} onMouseUpCallback={() => navigate('/contact')}/>
                </div>

            </div>
         </div>
    );
}

export default Home;