import { useTranslation } from "react-i18next";

import style from './styles.module.css'
import classNames from "classnames";
const Projects = () => {
    const {t} = useTranslation();
    return (
    <>
        <section id="Projects">
            <div className={classNames(style.container,'bg-white')}>
                xd
            </div>
        </section>
        <section id="Programs">
            <div className={classNames(style.container,'bg-[#4949da]')}>
                xd
            </div>
        </section>
    </>
    );
}
export default Projects;
