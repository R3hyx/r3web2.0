import styles from './ContactInfos.module.css';

function ContactInfos() {

    return (
        <div className={styles.content}>
            <div>
                <img className={styles.image2} src={require('../../assets/contacts/rCon.png')} alt='Jakub Rehak Contact' />
                
                <div className={styles.divH}>
                    <h4>Jakub Rehak</h4>
                </div>

                <div className={styles.divP}>
                    <p>CEO Of R3Tech</p>
                </div>

                <div className={styles.divA}>

                    <button className="aButton">
                        <a href="mailto:r3rehak@gmail.com" className='cntct'>r3rehak@gmail.com</a>
                    </button>
                
                    <button className="aButton">
                        <a href="tel:+420777066841" className='cntct'>+420 777 066 841</a>
                    </button>

                </div>
            </div>

            <div className={styles.space}></div>

            <div>
                <img className={styles.image2} src={require('../../assets/contacts/nCon.png')} alt='Jakub Rehak Contact' />
                
                <div className={styles.divH}>
                    <h4>Filip NEUBAUER</h4>
                </div>

                <div className={styles.divP}>
                    <p>CTO Of R3Tech</p>
                </div>

                <div className={styles.divA}>

                    <button className="aButton">
                        <a href="mailto:r3neubauer@gmail.com" className='cntct'>r3neubauer@gmail.com</a>
                   </button>

                    <button className="aButton">
                        <a href="tel:+420 720 206 668" className='cntct'>+420 720 206 668</a>
                    </button>
                
                </div>
            </div>
        </div>
    );
}

export default ContactInfos;
