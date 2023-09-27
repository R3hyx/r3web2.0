import styles from './R3Button.module.css';
import { useState } from 'react';
import { motion } from 'framer-motion';

function R3Button({ textButton, onMouseUpCallback }: { textButton: string; onMouseUpCallback?: () => void }) {
    const [isClicked, setIsClicked] = useState(false);
    const btnText = textButton;

    const handleMouseDown = () => {
        setIsClicked(true);
    }

    const handleMouseUp = () => {
        setIsClicked(false);
        // Call the custom onMouseUpCallback if provided
        if (onMouseUpCallback) {
            onMouseUpCallback();
        }
    }

    return (
        <div>
            <button
                className={`${styles.r3btn} ${isClicked ? styles.mousedown : ''}`}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
            >
                {btnText}
            </button>
        </div>
    );
}

export default R3Button;
