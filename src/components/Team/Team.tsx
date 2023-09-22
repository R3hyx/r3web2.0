import styles from './Team.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import useOnScrollAppear from '../../customHooks/useOnScrollFadeIn';
import { motion } from 'framer-motion';

function Team() {

    const { ref, animation } = useOnScrollAppear();
    const { ref:r2, animation:a2 } = useOnScrollAppear();


    return (
        <div ref={r2} className={styles.teamContent}>
            <motion.div animate={a2}>
                <h3>Our core team</h3>
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