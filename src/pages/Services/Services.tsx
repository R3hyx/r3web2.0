import NavBar from "../../components/NavBar";
import ServiceBox from "../../components/ServiceBox/ServiceBox";
import styles from './Services.module.css';
import { useState, useEffect } from "react";
import { useTranslationContext } from "../../LangContext";

function Services() {

    const [h1, setH1] = useState('We are a creative digital agency');
    const [h3dev, setH3dev] = useState('Software Development');
    const [h3design, setH3design] = useState('Design');
    const [softwareDev, setSoftwareDev] = useState([
        'Web Development',
        'Mobile Apps',
        'Enterprise Software',
        'Automatization',
    ])

    const [design, setDesign] = useState([
        'UI/UX Design',
        'Graphic Design',
    ])


    const { language } = useTranslationContext();

    useEffect(() => {
        if (language) {
            setH1('"Simplicity is the ultimate sofistication."');
            setH3dev('Vývoj Software');
            setH3design('Design');
            setSoftwareDev([
                'Webové Stránky',
                'Mobilní Aplikace',
                'Firemní Systémy',
                'Automatizace',
            ]);
            setDesign([
                'UI/UX Design',
                'Grafický Design',
            ]);
        } else {
            setH1('"Simplicity is the ultimate sofistication."');
            setH3dev('Software Development');
            setH3design('Design');
            setSoftwareDev([
                'Web Development',
                'Mobile Apps',
                'Enterprise Software',
                'Automatization',
            ]);
            setDesign([
                'UI/UX Design',
                'Graphic Design',
            ]);
        }
    }, [language]);

    return (
        <>
            <NavBar/>

            <div className={styles.h1Div}>
                <h1>{h1}</h1>
            </div>

            <div className={styles.ServicesContent}>
                <ServiceBox 
                    h3Service={h3dev}
                    paragraphs={softwareDev}
                />

                <ServiceBox 
                    h3Service={h3design}
                    paragraphs={design}
                />
            </div>
        </>
    );
}

export default Services;