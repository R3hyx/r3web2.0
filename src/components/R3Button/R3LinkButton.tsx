import styles from './R3Button.module.css';
import { useState } from 'react';

function R3LinkButton({ textButton, link, imageSrc }: { textButton: string; link: string, imageSrc: string }) {
    const [isClicked, setIsClicked] = useState(false);
    const btnText = textButton;
    const imgSrc = require(`../../assets/contacts/${imageSrc}`);

    const handleMouseDown = () => {
        setIsClicked(true);
    }

    const handleMouseUp = () => {
        setIsClicked(false);
    }

    return (
        <div>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <button
                    className={`${styles.r3btn} ${isClicked ? styles.mousedown : ''}`}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                >
                    <img src={imgSrc} className={styles.imageCon}/>
                    {btnText}
                </button>
            </a>
        </div>
    );
}

export default R3LinkButton;
