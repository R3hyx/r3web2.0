import styles from './Values.module.css';
import { motion } from 'framer-motion';
import useOnScrollAppear from '../../customHooks/useOnScrollFadeIn';
import R3Button from '../R3Button/R3Button';
import { useTranslationContext } from '../../LangContext';
import { useState, useEffect } from 'react';

function Values() {
    const { ref:r3, animation:a3 } = useOnScrollAppear();
    const { ref:r4, animation:a4 } = useOnScrollAppear();
    const { ref:r5, animation:a5 } = useOnScrollAppear();
    const { ref:r6, animation:a6 } = useOnScrollAppear();

    const [head, setHead] = useState('Our Values');
    const [det, setDet] = useState('Determination');
    const [cre, setCre] = useState('Creativity');
    const [ino, setIno] = useState('Innovation');


    const { language } = useTranslationContext();

    useEffect(() => {
        if (language) {
            setHead('Naše Hodnoty');
            setDet('Odhodlání');
            setCre('Kreativita');
            setIno('Inovace');
        } else {
            setHead('Our Values');
            setDet('Determination');
            setCre('Creativity');
            setIno('Innovation');
        }
    }, [language]);

    return (
        <>
            <div className={styles.valuesContainer}>
                <div className={styles.ourValues} ref={r3}>
                    <motion.div animate={a3}>
                        <h3>{head}</h3>
                    </motion.div>
                </div>

                <div ref={r4}>
                    <motion.div animate={a4}>
                        <R3Button textButton={det} onMouseUpCallback={() => console.log('det')} />
                    </motion.div>
                </div>

                <div ref={r5}>
                    <motion.div animate={a5}>
                        <R3Button textButton={cre} onMouseUpCallback={() => console.log('Creativity')} />
                    </motion.div>
                </div>

                <div ref={r6}>
                    <motion.div animate={a6}>
                        <R3Button textButton={ino} onMouseUpCallback={() => console.log('Innovation')} />
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default Values;
