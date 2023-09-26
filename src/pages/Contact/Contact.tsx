import ContactInfos from '../../components/ContactInfos/ContactInfos';
import NavBar from '../../components/NavBar';
import Social from '../../components/Social/Social';
import styles from './Contact.module.css';

function Contact() {
    return (
        <>
            <NavBar/>
            <div className={styles.ContactContent}>
                <div className={styles.hContact}>
                <h1>Contact informaion</h1>
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