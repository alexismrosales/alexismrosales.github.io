import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";


import { ItemData, normalizeString, SpacesToHyphen } from "./utils"

import styles from "./styles.module.css"


const ListGroupItem: FunctionComponent<ItemData> = props => {
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const name = props.title;
    let linkgh = props.element.LinkToProject;
    let linkweb = props.element.LinkToWeb;
    const en_lang = i18n.language === "en";
    const title = en_lang ? props.element.en.Title : props.element.es.Title
    const description = en_lang ? props.element.en.description : props.element.es.description;
    const date = en_lang ? props.element.en.date : props.element.es.date;
    const handleButton = (destiny: string) => {
        switch (location.pathname) {
            // In case the nav path is home (projects is set as default page for not mobiles devices)
            case "/":
                navigate(`projects/${destiny}`);
                break;
            default:
                navigate(destiny)
                break;
        }
    }
    return (
        <div className={styles.item}>
            <div className={styles.header}>
                <button onClick={() => handleButton(normalizeString(name.replace(SpacesToHyphen, "-")))}>
                    <h2 className={styles.item_title}>{title}</h2>
                </button>
                <a href={linkgh}>
                    <img className={styles.icon} src="/svg/icons/github_black.svg" alt="Icon" />
                </a>
                {linkweb !== "" &&
                    <a href={linkweb}>
                        <img className={styles.icon} src="/svg/icons/globe_black.svg" alt="Icon" />
                    </a>}
            </div>
            <p className={styles.description}>{description}</p>
            <p className={styles.date}>{date}</p>
        </div >
    )
}




/*
* tags = map[tag]int
* // Iterate over the tagas an increase counters
* for _, tag = range tags {
*   map["html"]++
*   map["css"]++
* }
* // Iterate over tags key and stack them with their values
*/

export default ListGroupItem;
