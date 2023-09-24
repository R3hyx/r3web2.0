import NavBar from "../../components/NavBar";
import ServiceBox from "../../components/ServiceBox/ServiceBox";
import styles from './Services.module.css';

function Services() {
    return (
        <>
            <NavBar/>

            <div className={styles.h1Div}>
                <h1>“Simplicity is the ultimate sofistication.”</h1>
            </div>

            <div className={styles.ServicesContent}>
                <ServiceBox h3Service='Software Development' pService='Mobile Apps 
                Web Development
                Enterprise Software
                Automatization'
                widthArg='200px'/>

                <ServiceBox h3Service='Design' pService='UI/UX Design
                Graphic Design
                Brand Identity'
                widthArg='180px'/>

                <ServiceBox h3Service='Marketing' pService='Social Network Management
                Marketing Strategy'
                widthArg='300px'/>
            </div>
        </>
    );
}

export default Services;