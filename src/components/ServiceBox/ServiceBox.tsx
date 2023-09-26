import styles from './ServiceBox.module.css';
import LightStick from '../LightStick/LightStick';

function ServiceBox({h3Service, paragraphs}: {h3Service:string, paragraphs:string[]}) {

    const h3Ser = h3Service;

    if (!paragraphs || paragraphs.length === 0) {
        return null;
      }
    

    return (
        <div className={styles.servContent}>
            <div className={styles.servBox}>
                <div className={styles.servText}>
                    <h3>{h3Ser}</h3>
                    {paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
                <div className={styles.servStick}>
                    <LightStick/>
                    <LightStick/>
                    <LightStick/>
                    <LightStick/>
                </div>
            </div>
            <hr className={styles.servLine}/>
        </div>

    );
}

export default ServiceBox;