import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";


import { Project } from "../../data/Projects"
import { Program } from "../../data/Programs"
import { AboutMe } from "../../data/Aboutme";

import ProjectsData from "../../data/Projects";
import ProgramsData from "../../data/Programs";
import AboutMeData from "../../data/Aboutme";
import Tag from "../listgroup/tag"
import ErrorPage from "../error"

import styles from "./styles.module.css"
import "./styles.css"
import classNames from 'classnames';
import useWindowSize from '../_scripts/resolution';

export interface PageData {
    element: Project | Program | AboutMe
    type: "Project" | "Program" | "AboutMe"
}

const PageBuilder: React.FC<PageData> = props => {
    const { i18n } = useTranslation();
    const { width } = useWindowSize();
    const en_lang = i18n.language === "en"
    const type = props.type
    const title = en_lang ? props.element.en.Title : props.element.es.Title
    const date = en_lang ? props.element.en.date : props.element.es.date
    const content = en_lang ? props.element.en.content : props.element.es.content
    const tags = en_lang ? props.element.Tags.en : props.element.Tags.es
    const isMobile = width < 768;
    const linkgh = props.element.LinkToProject
    const linkweb = props.element.LinkToWeb
    return <div>
        <div className={isMobile ? styles.header_mobile : ""}>
            <h1 className={isMobile ? styles.title_mobile : styles.title}>{title}</h1>
        </div>
        {type !== "AboutMe"
            && <p className={styles.date}>{date}</p>
            && tags.map((tag) => <Tag id={"tags"} label={tag} total={-1} />)
        }
        <hr className="mt-5" />
        <div className={styles.links}>
            <a href={linkgh} className={styles.link}>
                <img className={styles.icon} src="/svg/icons/github_black.svg" alt="Icon" />
                {!isMobile && <span>{linkgh}</span>}
            </a>
            {linkweb !== "" &&
                <a href={linkweb} className={styles.link}>
                    <img className={styles.icon} src="/svg/icons/globe_black.svg" alt="Icon" />
                    {!isMobile && <span>{linkweb}</span>}
                </a>}
        </div>
        <div className={styles.content_container}>
            {content}
        </div>
    </div >
}


const PageBuilderWrapper = () => {
    const navigate = useNavigate();
    const { type, name } = useParams();

    const [finalType, setFinalType] = useState<"Project" | "Program" | "AboutMe" | null>(null);
    const [data, setData] = useState<Project | Program | AboutMe | null>(null);
    const [isFading, setIsFading] = useState(true);
    useEffect(() => {
        if (!type || !name || (type !== "aboutme" && type !== "projects" && type !== "programs")) {
            return;
        }
        const mappedType: "Project" | "Program" | "AboutMe" =
            type === "aboutme" ? "AboutMe" :
                type === "projects" ? "Project" :
                    "Program";

        setFinalType(mappedType);

        const fetchedData = fetchDataByPageAndName(mappedType, name);
        setTimeout(() => {
            setData(fetchedData);
            setIsFading(false);
        }, 500);
        setData(fetchedData);
    }, [type, name, navigate]);

    if (isFading) {
        return <Loader />
    }
    if (!data) {
        return <ErrorPage />
    }
    if (!finalType || !data) {
        return <></>
    }
    return <PageBuilder type={finalType} element={data} />;
};

const Loader: React.FC = () => {
    return <div className={classNames("fade-in", styles.container_ex)}>
        <p className={styles.dots}>...</p>
    </div>;
}

const fetchDataByPageAndName = (type: "Project" | "Program" | "AboutMe", objectName: string) => {
    switch (type) {
        case "Project":
            return ProjectsData[objectName] || null;
        case "Program":
            return ProgramsData[objectName] || null;
        case "AboutMe":
            return AboutMeData["AboutMe"] || null;
    }
};

export default PageBuilderWrapper;
