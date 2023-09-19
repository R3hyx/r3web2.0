import { useState } from 'react';
import styles from './SmallR3Button.module.css';

function SmallR3Button() {
    const [isClicked, setIsClicked] = useState(false);
    const [btnText, setBtnText] = useState('en');

    const handleMouseDown = () => {
        setIsClicked(true);
    }
    const handleMouseUp = () => {
        setIsClicked(false);
        setBtnText((prevText) => (prevText === 'cz' ? 'en' : 'cz'));

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