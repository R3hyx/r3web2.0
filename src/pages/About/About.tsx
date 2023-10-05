import styles from './About.module.css';
import TextContainer from '../../components/TextContainer/TextContainer';
import { motion } from 'framer-motion';
import useOnScrollAnimation from '../../customHooks/useOnScrollLeft';
import NavBar from '../../components/NavBar';
import Team from '../../components/Team/Team';
import Values from '../../components/Values/Values';
import { useState, useEffect } from 'react';
import { useTranslationContext } from '../../LangContext';


function About() {
    const { ref, animation } = useOnScrollAnimation();
    const { ref:r2, animation:a2 } = useOnScrollAnimation();
    const { ref:r3, animation:a3 } = useOnScrollAnimation();

    const [h3Who, setH3Who] = useState('Who We Are');
    const [pWho, setPWho] = useState('"We are creative solutions team dedicated to transforming your vision into tangible results."');
    const [h3Mission, setH3Mission] = useState('Our Mission');
    const [pMission, setPMission] = useState('"We are here to help our clients reach their full potential with our determination, creativity, and innovation. We aim to grow through the growth of our clients."');
    const [h3What, setH3What] = useState('What We Do');
    const [pWhat, setPWhat] = useState('"We specialize in software development, graphic design, and UI/UX design, offering comprehensive solutions for a wide range of design and software needs."');
    const [abt, setAbt] = useState('“Your Ultimate Partner for Taking Your Business to the Next Level”');


    const { language } = useTranslationContext();

    useEffect(() => {
        if (language) {
            setH3Who('Kdo Jsme');
            setPWho('"Jsme kreativní a ambiciózní tým odhodlaný přeměnit vaši vizi do reálných výsledků."');
            setH3Mission('Naše Mise');
            setPMission('"Jsme zde abychom pomohli naším klientům dosáhnout jejich plného potenciálu skrze naši odhodlanost, kreativitu a inovace. Míříme na růst skrze prosperitu našich klientů."');
            setH3What('Naše Specializace');
            setPWhat('"Speciallizujeme se na vývoj software a grafcký a UI/UX design, nabízíme širokou škálu řešení pro všechny Vaše potřeby."');
            setAbt('“Je čas pro vaši firmu, aby se posunula na novou úroveň"');
        } else {
            setH3Who('Who We Are');
            setPWho('"We are creative solutions team dedicated to transforming your vision into tangible results."');
            setH3Mission('Our Mission');
            setPMission('"We are here to help our clients reach their full potential with our determination, creativity and innovation. We aim to grow through the growth of our clients."');
            setH3What('What We Do');
            setPWhat('"We specialize in software development, graphic design, and UI/UX design, offering comprehensive solutions for a wide range of design and software needs."');
            setAbt('"Your Ultimate Partner for Taking Your Business to the Next Level"');
        }
    }, [language]);


    return (
        <>
            <NavBar/>
            <div className={styles.h1Div}>
                <h1>{abt}</h1>
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

                        <div ref={r3}>
                            <motion.div className={styles.textContainer}
                            animate={a3}>
                            
                                <TextContainer h3Text={h3What} pText={pWhat}/>
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