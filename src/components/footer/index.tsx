import { useTranslation } from "react-i18next";

import FooterData from "../../data/Footer";

import style from './styles.module.css'

import classNames from "classnames";

const Footer = () => {
    const {t, i18n} = useTranslation();
    let madeby = i18n.language === "en" ?  "Webpage made by Alexis M.Rosales " : "Página hecha por Alexis M.Rosales ";
    let email = FooterData.Contact.Email;
    let phone = FooterData.Contact.Phone;
    let address = i18n.language === "en" ? FooterData.Contact.Address.en : FooterData.Contact.Address.es;
    return (
        <footer id="footer">
            <div className={style.container}>
                <div>
                    <h3 className={style.title}>{i18n.language === "en" ? "Contact me" : "Contáctame"}:</h3>
                    <ul>
                        <li className={style.item}>
                            <span className="font-bold">{i18n.language === "en" ? "Email" : "Correo Electrónico"}: </span> {email}
                        </li>
                        <li className={style.item}>
                            <span className="font-bold">{i18n.language === "en" ? "Phone" : "Teléfono"}: </span> {phone}
                        </li>
                        <li className={style.item}>
                            <span className="font-bold">{i18n.language === "en" ? "Address" : "Ubicación"}: </span> {address}
                        </li>
                    </ul>
                </div>
                <p className={style.madeby}>{madeby} © 2024.</p>
            </div>
        </footer>
    )
};
export default Footer;
