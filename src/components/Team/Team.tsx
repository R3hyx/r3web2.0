import styles from './Team.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import useOnScrollAppear from '../../customHooks/useOnScrollFadeIn';
import { motion } from 'framer-motion';
import { useTranslationContext } from '../../LangContext';
import { useState, useEffect } from 'react';

function Team() {

    const { ref, animation } = useOnScrollAppear();
    const { ref:r2, animation:a2 } = useOnScrollAppear();

    const [h3, setH2] = useState('Our Team');

    const { language } = useTranslationContext();

    useEffect(() => {
        if (language) {
            setH2('Náš Tým');
        } else {
            setH2('Our Team');
        }
    }, [language]);

    return (
        <div ref={r2} className={styles.teamContent}>
            <motion.div animate={a2}>
                <h3>{h3}</h3>
            </motion.div>
            <div ref={ref}>
                <motion.div className={styles.imageDiv} animate={animation}>
                    <Carousel
                    autoPlay
                    infiniteLoop
                    showStatus={false}
                    showThumbs={false}
                    showArrows={false}
                    stopOnHover={false}
                    showIndicators={false}
                    >
                        <div>
                            <img className={styles.image2} src={require('../../assets/members/kope.png')} alt='Filip Kopecky' />
                        </div>
                        <div>
                            <img className={styles.image2} src={require('../../assets/members/rehak.png')} alt='Jakub Rehak' />
                        </div>
                        <div>
                            <img className={styles.image2} src={require('../../assets/members/neub.png')} alt='Filip Neubauer' />
                        </div>
                        <div>
                            <img className={styles.image2} src={require('../../assets/members/bui.png')} alt='Tommy Bui' />
                        </div>
                        
                    </Carousel>


                    <Carousel
                    autoPlay
                    infiniteLoop
                    showStatus={false}
                    showThumbs={false}
                    showArrows={false}
                    stopOnHover={false}
                    showIndicators={false}
                    >       
                        <div>
                            <img className={styles.image} src={require('../../assets/members/rehak.png')} alt='Jakub Rehak' />
                        </div> 
                        <div>
                            <img className={styles.image} src={require('../../assets/members/neub.png')} alt='Filip Neubauer' />
                        </div>
                        <div>
                            <img className={styles.image} src={require('../../assets/members/bui.png')} alt='Tommy Bui' />
                        </div>
                        <div>
                            <img className={styles.image} src={require('../../assets/members/kope.png')} alt='Filip Kopecky' />
                        </div>
                    </Carousel>

                    <Carousel
                    autoPlay
                    infiniteLoop
                    showStatus={false}
                    showThumbs={false}
                    showArrows={false}
                    stopOnHover={false}
                    showIndicators={false}
                    >
                        <div>
                            <img className={styles.image2} src={require('../../assets/members/neub.png')} alt='Filip Neubauer' />
                        </div>
                        <div>
                            <img className={styles.image2} src={require('../../assets/members/bui.png')} alt='Tommy Bui' />
                        </div>
                        <div>
                            <img className={styles.image2} src={require('../../assets/members/kope.png')} alt='Filip Kopecky' />
                        </div>
                        <div>
                            <img className={styles.image2} src={require('../../assets/members/rehak.png')} alt='Jakub Rehak' />
                        </div>
                    </Carousel>
                </motion.div>
            </div>
        </div>
    );
}

export default Team;