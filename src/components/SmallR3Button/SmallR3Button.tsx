import { useState } from 'react';
import styles from './SmallR3Button.module.css';

function SmallR3Button({ lang }: { lang: string }) {
    const [isClicked, setIsClicked] = useState(false);
    const btnText = lang;

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

export default SmallR3Button;