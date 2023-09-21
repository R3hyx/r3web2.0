import styles from './About.module.css';
import TextContainer from '../../components/TextContainer/TextContainer';
import R3Button from '../../components/R3Button/R3Button';
import { motion } from 'framer-motion';
import useOnScrollAnimation from '../../customHooks/useOnScrollLeft';
import useOnScrollAppear from '../../customHooks/useOnScrollFadeIn';
import NavBar from '../../components/NavBar';

function About() {

    const { ref, animation } = useOnScrollAnimation();
    const { ref:r2, animation:a2 } = useOnScrollAnimation();

    const { ref:r3, animation:a3 } = useOnScrollAppear();
    const { ref:r4, animation:a4 } = useOnScrollAppear();
    const { ref:r5, animation:a5 } = useOnScrollAppear();
    const { ref:r6, animation:a6 } = useOnScrollAppear();


    const h3Who = 'Who we are';
    const pWho = '"We are creative solutions company dedicated to transforming your vision into tangible results."';

    const h3Mission = 'Our mission';
    const pMission = '"We are here to help our clients reach their full potential with our determination, creativity and innovation. We aim to grow through the growth of our clients."';
    return (
        <body className={styles.defBody}>
            <NavBar/>
            <div className={styles.AboutContent}>

                <h1>“Your Ultimate Partner for Taking Your Business to the Next Level”</h1>

                <div className={styles.container}>

                    <div className={styles.texts}>
                        <div ref={ref}>
                            <motion.div className={styles.textContainer}
                            animate={animation}>
                                <TextContainer h3Text={h3Who} pText={pWho}/>
                            </motion.div>
                        </div>

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

                        <div ref={r2}>
                            <motion.div className={styles.text2Container}
                            animate={a2}>
                            
                                <TextContainer h3Text={h3Mission} pText={pMission}/>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default About;