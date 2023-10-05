import { useState, useEffect } from 'react';
import styles from './SmallR3Button.module.css';
import { useTranslationContext } from '../../LangContext';

function SmallR3Button() {
    const [isClicked, setIsClicked] = useState(false);
    const [btnText, setBtnText] = useState('en');

    const { language } = useTranslationContext();

    useEffect(() => {
        if (language) {
            setBtnText('cz');
        } else {
            setBtnText('en');
        }
    }, [language]);

    const handleMouseDown = () => {
        setIsClicked(true);
    }
    const handleMouseUp = () => {
        setIsClicked(false);
        switchBool();
    }

    const { switchBool } = useTranslationContext();

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