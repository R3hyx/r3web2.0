import styles from './Values.module.css';
import { motion } from 'framer-motion';
import useOnScrollAppear from '../../customHooks/useOnScrollFadeIn';
import R3Button from '../R3Button/R3Button';

function Values() {

    const { ref:r3, animation:a3 } = useOnScrollAppear();
    const { ref:r4, animation:a4 } = useOnScrollAppear();
    const { ref:r5, animation:a5 } = useOnScrollAppear();
    const { ref:r6, animation:a6 } = useOnScrollAppear();

    return (
        <div>
            <div className={styles.valuesContainer}>

                <div className={styles.ourValues} ref={r3}>
                    <motion.div animate={a3}>
                        <h3>Our Values</h3>
                    </motion.div>
                </div>

                <div ref={r4}>
                    <motion.div animate={a4}>
                        <R3Button textButton='Determination' onMouseUpCallback={()=> console.log('det')}/>
                    </motion.div>
                </div>

                <div ref={r5}>
                    <motion.div animate={a5}>        
                        <R3Button textButton='Creativity' onMouseUpCallback={()=> console.log('Creativity')}/>
                    </motion.div>
                </div>

                <div ref={r6}>
                    <motion.div animate={a6}>
                        <R3Button textButton='Innovation' onMouseUpCallback={()=> console.log('Innovation')}/>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Values;