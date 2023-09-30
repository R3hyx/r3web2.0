import NavBar from "../../components/NavBar";
import ServiceBox from "../../components/ServiceBox/ServiceBox";
import styles from './Services.module.css';

function Services() {

    const softwareDev = [
        'Web Development',
        'Mobile Apps',
        'Enterprise Software',
        'Automatization',
    ];

    const design = [
        'UI/UX Design',
        'Graphic Design',
    ];

    const marketing = [
        'Social Networks',
        'Marketing Strategy',
        'Brand Identity',
    ];

    return (
        <>
            <NavBar/>

            <div className={styles.h1Div}>
                <h1>“Simplicity is the ultimate sofistication.”</h1>
            </div>

            <div className={styles.ServicesContent}>
                <ServiceBox 
                    h3Service='Software Development' 
                    paragraphs={softwareDev}
                />

                <ServiceBox 
                    h3Service='Design'
                    paragraphs={design}
                />

                <ServiceBox 
                    h3Service='Marketing' 
                    paragraphs={marketing}
                />
            </div>
        </>
    );
}

export default Services;