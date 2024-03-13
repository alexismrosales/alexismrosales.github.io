import { useTranslation } from "react-i18next";

import AboutMeData from "../../data/Aboutme";

import style from './styles.module.css'
const AboutMe = () => {
    const {t, i18n} = useTranslation();
    const title: JSX.Element = i18n.language === "en" ? AboutMeData.en.Title : AboutMeData.es.Title;
    const text: JSX.Element = i18n.language === "en" ? AboutMeData.en.Text : AboutMeData.es.Text;
    const phrase: JSX.Element = i18n.language === "en" ? AboutMeData.en.Phrase : AboutMeData.es.Phrase;
    return (
    <section id="AboutMe">
        <div className={style.container}>   
            <div className={style.aboutMeImage}></div>
            <div className={style.aboutMeText}>
                <h2 className={style.title}>{title}.</h2>
                <br/>
                <p className={style.text}>{text}</p>
                <br/>
                <p className={style.phrase}>{phrase}</p>
            </div>
        </div>
    </section>
    );
}
export default AboutMe;