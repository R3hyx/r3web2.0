import { useState } from 'react';
import styles from './R3Button.module.css';

function R3Button({ textButton }: { textButton: string}) {
    const [isClicked, setIsClicked] = useState(false);
    const btnText = textButton;

    const handleMouseDown = () => {
        setIsClicked(true);
    }
    const handleMouseUp = () => {
        setIsClicked(false);
    }

    return (
        <div>
            <button
                className={`${styles.r3btn} ${isClicked ? styles.mousedown : ''}`}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
            >{btnText}
            </button>
        </div>
    );
}

export default R3Button;