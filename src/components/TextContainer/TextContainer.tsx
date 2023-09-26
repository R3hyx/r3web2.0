import styles from './TextContainer.module.css';

function TextContainer( {h3Text, pText}: { h3Text: string; pText: string } ) {
    
    const h3t = h3Text;
    const pt = pText;

    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <div className={styles.head}>
                    <h3>{h3t}</h3>
                </div>
                <div>
                    <p>{pt}</p>
                </div>
            </div>
        </div>
    );
}

export default TextContainer;