import styles from './About.module.css';
import TextContainer from '../../components/TextContainer/TextContainer';
import { motion } from 'framer-motion';
import useOnScrollAnimation from '../../customHooks/useOnScrollLeft';
import NavBar from '../../components/NavBar';
import Team from '../../components/Team/Team';
import Values from '../../components/Values/Values';

function About() {
    const { ref, animation } = useOnScrollAnimation();
    const { ref:r2, animation:a2 } = useOnScrollAnimation();

    const h3Who = 'Who we are';
    const pWho = '"We are creative solutions company dedicated to transforming your vision into tangible results."';

    const h3Mission = 'Our mission';
    const pMission = '"We are here to help our clients reach their full potential with our determination, creativity and innovation. We aim to grow through the growth of our clients."';
    
    return (
        <>
            <NavBar/>
            <div className={styles.h1Div}>
                <h1>“Your Ultimate Partner for Taking Your Business to the Next Level”</h1>
            </div>

            <div className={styles.AboutContent}>
                <div className={styles.container}>

                    <div className={styles.texts}>
                        <div ref={ref}>
                            <motion.div className={styles.textContainer}
                            animate={animation}>
                                <TextContainer h3Text={h3Who} pText={pWho}/>
                            </motion.div>
                        </div>

                        <div ref={r2}>
                            <motion.div className={styles.text2Container}
                            animate={a2}>
                            
                                <TextContainer h3Text={h3Mission} pText={pMission}/>
                            </motion.div>
                        </div>
                    </div>

                    <Values/>

                    <Team/>

                </div>
            </div>
        </>
    );
}

export default About;