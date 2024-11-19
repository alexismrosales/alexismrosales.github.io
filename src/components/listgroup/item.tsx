import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";


import { ItemData } from "./interfaces"

import styles from "./styles.module.css"


const ListGroupItem: FunctionComponent<ItemData> = props => {
    const { i18n } = useTranslation();
    const title = props.title;
    let linkgh = props.element.LinkToProject;
    let linkweb = props.element.LinkToWeb;
    const en_lang = i18n.language === "en";
    const description = en_lang ? props.element.en.description : props.element.es.description;
    const date = en_lang ? props.element.en.date : props.element.es.date;

    return (
        <div className={styles.item}>
            <div className={styles.header}>
                <h2 className={styles.item_title}>{title}</h2>
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
