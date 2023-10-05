import ContactInfos from '../../components/ContactInfos/ContactInfos';
import NavBar from '../../components/NavBar';
import Social from '../../components/Social/Social';
import styles from './Contact.module.css';
import { useState, useEffect } from 'react';
import { useTranslationContext } from '../../LangContext';

function Contact() {

    const [h1, setH1] = useState('Contact Informaion');

    const { language } = useTranslationContext();

    useEffect(() => {
        if (language) {
            setH1('Kontaktní Informace');
        } else {
            setH1('Contact Informaion');
        }
    }, [language]);

    return (
        <>
            <NavBar/>
            <div className={styles.ContactContent}>
                <div className={styles.hContact}>
                <h1>{h1}</h1>
                </div>

                <div className={styles.infos}>
                    <Social/>
                    <ContactInfos/>
                </div>

            </div>
        </>
    );
}

export default Contact;