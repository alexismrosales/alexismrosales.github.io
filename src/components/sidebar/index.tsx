import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import useWindowSize from "../_scripts/resolution";
import SwitchBtn from '../switchbutton'
import style from './styles.module.css'

const Sidebar = () => {

    const location = useLocation();
    const { t, i18n } = useTranslation("intro");
    const { width } = useWindowSize();
    const navigate = useNavigate();

    const pathname = location.pathname.split("/")[1] || "";
    const notHome = location.pathname !== "/";
    const isMobile = width < 768; // tailwind sm size
    const en_lang = i18n.language === "en"

    const [navOption, setNavOption] = useState(""); // home path or /

    const handleButton = () => {
        if (location.pathname === "/projects") {
            navigate("")
        } else {
            navigate(-1)
        }
    }
    useEffect(() => {
        switch (pathname) {
            case "projects":
                setNavOption("Projects");
                break;
            case "programs":
                setNavOption("Programs");
                break;
            case "aboutme":
                setNavOption("AboutMe");
                break;
            default:
                setNavOption("");
        }
    }, [pathname])
    return (
        <div className={isMobile ? (notHome ? style.sidebar_mobile : style.sidebar) : style.sidebar}>
            {/* Show back button only in mobile and not in homepage */}
            {/* TODO: Configure button one page back, not home */}
            <button onClick={() => handleButton()} className={isMobile ? (notHome ? "flex" : "hidden") : "hidden"}>
                <svg className={style.back_svg} fill="#00000" viewBox="0 0 200 200" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title>
                    <path d="M160,89.75H56l53-53a9.67,9.67,0,0,0,0-14,9.67,9.67,0,0,0-14,0l-56,56a30.18,30.18,0,0,0-8.5,18.5c0,1-.5,1.5-.5,2.5a6.34,6.34,0,0,0,.5,3,31.47,31.47,0,0,0,8.5,18.5l56,56a9.9,9.9,0,0,0,14-14l-52.5-53.5H160a10,10,0,0,0,0-20Z"></path></g>
                </svg>
            </button>
            <h1 className={isMobile ? (notHome ? style.site_title_mobile : style.site_title) : style.site_title}>
                <a href="/" className="">
                    <span className="text-[var(--black)]">Alexis</span> M.Rosales
                </a>
            </h1>
            <p className={isMobile ? (notHome ? "hidden" : style.lead) : style.lead}>
                {t("mainText")}
            </p>
            {/* Nav menu */}
            <nav className={isMobile ? (notHome ? "hidden" : style.nav_menu) : style.nav_menu}>
                <Link to="/projects" className={navOption === "Projects" ? "font-extrabold" : ""}>
                    {en_lang ? "Projects" : "Proyectos"}
                </Link>
                <Link to="/programs" className={navOption === "Programs" ? "font-extrabold" : ""}>
                    {en_lang ? "Programs" : "Programas"}
                </Link>
                <Link to="/aboutme/foo" className={navOption === "AboutMe" ? "font-extrabold" : ""}>
                    {en_lang ? "About me" : "Sobre mí"}
                </Link>
                <a
                    href={i18n.language === "en" ? "resources/en_resume.pdf" : "resources/es_resume.pdf"}
                    download > {en_lang ? "Resume" : "Curriculum"}

                </a>
            </nav>

            {/* Logos */}
            <div className={isMobile ? (notHome ? "hidden" : style.nav_icons) : style.nav_icons}>
                <a href="">
                    <img className="" alt="" src="/svg/icons/github_white.svg" />
                </a>
                <a href="">
                    <img className="" alt="" src="/svg/icons/linkedin_white.svg" />
                </a>
            </div>

            {/* Switch container */}
            <span className={style.switch_container}>
                <span className={style.switch_btn}>
                    <SwitchBtn />
                </span>
            </span>
        </div>)
}

export default Sidebar
