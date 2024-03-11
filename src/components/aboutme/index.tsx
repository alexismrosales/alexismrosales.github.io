import { useTranslation } from "react-i18next";

import style from './styles.module.css'
const AboutMe = () => {
    const {t} = useTranslation();
    return (
    <section id="AboutMe">
        <div className={style.container}>
            
        </div>
    </section>
    );
}
export default AboutMe;