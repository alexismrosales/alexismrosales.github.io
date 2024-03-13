import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Collapse } from '@material-tailwind/react';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import SwitchBtn from './switchBtn';
import smoothScroll from "../_scripts/smooth_scroll";

import style from './styles.module.css';

import links from '../../data/links.json'
const Header = () => {
    
    const [open, setOpen] = useState(false);
    const toggleOpen = () => { setOpen((state) => !state); }
    useEffect(() => {
        smoothScroll(".scroll-link");
      }, []);
    
    return (
        <nav className={style.nav}>
            <div className={style.container}>
                
                <div className={style.mainItems}>
                    <a className='scroll-link' href='#Intro'><span className={style.name}><span className={style.firstName}>Alexis</span> M.Rosales</span></a>    
                    <div className={style.mainLinks}>
                        <a href={links.github}><img className={style.logoGH} alt='' src='img/logos/gh_white.png'/></a>
                        <a href={links.linkedin}><img className={style.logoIN} alt='' src='img/logos/in_white.png'/></a>
                    </div>
                </div>
                <button onClick={toggleOpen} className={style.collapseBTN}>
                {open ? (
                    <XMarkIcon className="h-6 w-6" strokeWidth={3} />
                ) : (
                    <Bars3Icon className="h-6 w-6" strokeWidth={3} />
                )}
                </button>
                <div className={style.navFull}>
                    <NavList/>
                </div>
                <Collapse className={style.collapse} open={open}>
                    <div className={open ? 'block' : 'hidden'}>
                        <NavList/>
                    </div>                    
                </Collapse>
            </div>
            <div className={style.floating}>
                <div className={style.containerSwitch}>
                    <SwitchBtn/>
                </div>
            </div>
        </nav>   
    )
}
export default Header;
const NavList = () => { 
    const { t } = useTranslation("header");
    
    return (
            <ul className={style.navList}>
                <li className={style.navItem}>
                    <a className='scroll-link' href="#Projects">{t("items.projects")}</a>
                </li>
                <li className={style.navItem}>
                    <a className='scroll-link' href="#Programs">{t("items.programs")}</a>
                </li>
                <li className={style.navItem}>
                    <a className='scroll-link' href="#AboutMe">{t("items.aboutme")}</a>
                </li>
                <li className={style.links}>
                    <a href={links.github}><img className={style.logoGH} src='img/logos/gh_white.png'/></a>
                    <a href={links.linkedin}><img className={style.logoIN} src='img/logos/in_white.png'/></a>
                </li>
            </ul>
    )
}