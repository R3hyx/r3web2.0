import styles from './LightStick.module.css';
import useOnScrollAppear from '../../customHooks/useOnScrollFadeIn';
import { motion } from 'framer-motion';

function LightStick() {

    const {ref, animation} = useOnScrollAppear();

    return (
        <div ref={ref}>
            <motion.div animate={animation}>
                <div className={styles.lightStick}></div>
            </motion.div>
        </div>
    );
}

export default LightStick;