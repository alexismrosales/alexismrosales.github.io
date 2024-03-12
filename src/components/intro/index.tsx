import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import CarouselTransition from "../carousel/index";
import smoothScroll from "../_scripts/smooth_scroll";

import links from "../../data/links.json";

import style from "./styles.module.css"
import classNames from 'classnames';


const Intro = () => {
    const { t, i18n } = useTranslation("intro");

    useEffect(() => {
        smoothScroll(".scroll-link");
      }, []);
      
    return (
        <section id="Intro">
            <div className={style.container}>
                <div className={style.carousel}>
                    <CarouselTransition/>
                </div>
                <div className={style.content}>
                    <h1 className={style.name}>
                        Jorge <span className={style.nameP1}>Alexis M</span>árquez <span className={style.nameP1}>Rosales</span>
                    </h1>  
                    <p className={style.mainText}>
                        {t("mainText")}
                    </p>
                    <a className={style.resume} href={i18n.language === 'en' ? 'resources/en_resume.pdf' : 'resources/es_resume.pdf'} download>
                        <button className={style.buttonResume}>
                            {t("buttonResume")}
                        </button>
                    </a>
                    <div className={style.links}>
                        <a href={links.github}><img className={style.logoGH} alt='' src='img/logos/gh_white.png'/></a>
                        <a href={links.linkedin}><img className={style.logoIN} alt='' src='img/logos/in_white.png'/></a>
                    </div>
                    <a className={classNames(style.arrowBtn,'scroll-link')} href='#Projects'><img className={style.arrow} src='img/logos/arrow.png'/></a>
                </div>
            </div>
        </section>
    )
}
export default Intro;