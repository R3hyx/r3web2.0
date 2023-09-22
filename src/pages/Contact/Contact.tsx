import NavBar from '../../components/NavBar';
import styles from './Contact.module.css';

function Contact() {
    return (
        <>
            <NavBar/>
            <div className={styles.ContactContent}>
                <h1>Contact informaion</h1>
            </div>
        </>
    );
}

export default Contact;