import { useTranslation } from 'react-i18next';

import { CarouselTransition } from "../carousel/index";

import style from "./styles.module.css"

const Intro = () => {
    const { t } = useTranslation("intro");
    return (
        <section id="Intro">
            <div className={style.container}>
                <div className={style.carousel}>
                    <CarouselTransition/>
                </div>
                <div className={style.content}>
                    <p className={style.name}>
                        Jorge <span className={style.nameP1}>Alexis M</span>árquez <span className={style.nameP1}>Rosales</span>
                    </p>  
                    <p className={style.mainText}>
                        {t("mainText")}
                    </p>
                </div>
            </div>
        </section>
    )
}
export default Intro;