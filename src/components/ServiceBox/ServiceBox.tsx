import styles from './ServiceBox.module.css';
import LightStick from '../LightStick/LightStick';

function ServiceBox({h3Service, pService, widthArg}: {h3Service:string, pService:string, widthArg:string}) {

    const h3Ser = h3Service;
    const pSer = pService;
    const wid = widthArg;

    return (
        <div className={styles.servContent}>
            <div className={styles.servBox}>
                <div className={styles.servText} style={{ width: `${wid}`}}>
                    <h3 className={styles.servTextH}>{h3Ser}</h3>
                    <p>{pSer}</p>
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