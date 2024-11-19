import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from "react-router-dom";
import useWindowSize from "../_scripts/resolution";

import { ListGroupsProps, ItemsData, TagsData } from "./interfaces"
import ProjectData from "../../data/Projects";
import ProgramData from "../../data/Programs";

import Item from "./item"

import styles from './styles.module.css'
import Tag from './tag';
import { useEffect, useState } from 'react';


const SpacesToHyphen = /\s+/g;


const ListGroup: React.FC<ListGroupsProps> = props => {
    const location = useLocation();
    const { i18n } = useTranslation("intro");
    const { width } = useWindowSize();

    const notHome = location.pathname !== "/";
    const isMobile = width < 768; // tailwind sm size

    const type = props.type
    const en_lang = i18n.language === "en"
    const title = type === "Project" ? (en_lang ? "Projects" : "Proyectos") : (en_lang ? "Programs" : "Programas")
    const tags: Map<string, number> =
        GetTags({
            id: props.type,
            elements: props.type === "Project" ? ProjectData : ProgramData,
            type: props.type,
        });

    return (
        <div>
            <div className={isMobile ? (notHome ? styles.header_mobile : "pt-5") : ""}>
                <h2 className={isMobile ? (notHome ? styles.title_mobile : styles.title) : styles.title}>{title}</h2>
            </div>

            {
                type === "Project"
                    ? <>
                        <ListTags tags={tags} elementssize={Object.entries(ProjectData).length} />
                        <ListItems elements={ProjectData} type={"Project"} id="Projects" />
                    </>

                    :
                    <>
                        <ListTags tags={tags} elementssize={Object.entries(ProgramData).length} />
                        <ListItems elements={ProgramData} type={"Program"} id="Programs" />
                    </>
            }

        </div>
    )
}

const normalizeString = (str: string) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Elimina acentos
};

const ListTags: React.FC<TagsData> = (props) => {
    const navigate = useNavigate();
    const { i18n } = useTranslation();
    const en_lang = i18n.language === "en";

    const handleClick = (tag: string) => {
        // Navigating to home page
        if (tag === "All" || tag === "Todos") {
            navigate("")
        } else {
            const normalizedTag = normalizeString(tag).replace(SpacesToHyphen, "-");
            navigate(`#${normalizedTag}`); // Normaliza el tag con "-"
        }
    };

    const AllTag = en_lang ? "All" : "Todos"

    const tagSize = props.elementssize

    useEffect(() => {
        navigate("");
    }, [i18n.language]);

    return (
        <div className={styles.tags_container}>
            {Array.from(props.tags.entries()).map(([label, total]) => {
                return <button onClick={() => handleClick(label)}>
                    <Tag id={"tags"} label={label} total={total} />
                </button>
            })}
            {}
            <button onClick={() => handleClick(AllTag)}>
                <Tag id={"tags"} label={AllTag} total={tagSize} />
            </button>
        </div>
    );
};


const ListItems: React.FC<ItemsData> = (props) => {
    const { i18n } = useTranslation();
    const navigate = useNavigate()
    const location = useLocation();
    const en_lang = i18n.language === "en";
    const tag = location.hash.replace("#", "").replace(SpacesToHyphen, "");
    const [filter, setFilter] = useState("");
    const [filteredElements, setFilteredElements] = useState(Object.entries(props.elements));

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
    useEffect(() => {
        setFilter(tag);
    }, [tag]);

    useEffect(() => {
        if (filter === "") {
            setFilteredElements(Object.entries(props.elements));
        } else {
            const filtered = Object.entries(props.elements).filter(([_, Element]) => {
                const tagList = en_lang ?
                    Element.Tags.en.map(tag => normalizeString(tag).replace(SpacesToHyphen, "-"))
                    : Element.Tags.es.map(tag => normalizeString(tag).replace(SpacesToHyphen, "-"));
                return tagList.includes(filter);
            });
            setFilteredElements(filtered);
        }
    }, [filter, en_lang, props.elements]);
    return (
        <div className={styles.item_container} id={props.id}>
            {filteredElements.map(([name, Element]) => (
                <>
                    <hr />
                    <button onClick={() => handleButton(normalizeString(name).replace(SpacesToHyphen, "-"))}>
                        <Item title={name} element={Element} type={props.type} />
                    </button>
                </>
            ))}
        </div>
    );
}

const GetTags = (Item: ItemsData) => {
    const { i18n } = useTranslation();
    const en_lang = i18n.language === "en";
    const tags = new Map<string, number>();
    // Iterating over every project or program and get all number of tags on a map
    Object.entries(Item.elements).forEach(([_, Element]) => {
        const tagList = en_lang ? Element.Tags.en : Element.Tags.es;
        tagList.forEach((tag) => {
            const currentCount = tags.get(tag) || 0;
            tags.set(tag, currentCount + 1);
        });
    });
    return tags;
}
export default ListGroup;
