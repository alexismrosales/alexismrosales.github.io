import { useTranslation } from "react-i18next";

import { ProjectsI } from "../../data/Projects";
import { ProgramsI } from "../../data/Programs";

import ProjectData from "../../data/Projects";
import ProgramData from "../../data/Programs";

import Card from "../cards";
import style from './styles.module.css'

import classNames from "classnames";
import { FunctionComponent } from "react";
const Projects = () => {
    const { t, i18n } = useTranslation();
    return (
    <>
        <section id="Projects">
            <div className={classNames(style.container,'bg-white')}>
                <h2 className={classNames(style.title, 'text-[#4949da]')}>{i18n.language === "en" ? "Projects" : "Proyectos"}</h2> 
                <ListCards elements={ProjectData} type={"Project"} id="Project"/>
            </div>
        </section>
        <section id="Programs">
            <div className={classNames(style.container,'bg-[#4949da]')}>
                <h2 className={classNames(style.title,'text-white')}>{i18n.language === "en" ? "Programs" : "Programas"}</h2> 
                <ListCards elements={ProgramData} type={"Program"} id="Program"/>
            </div>
        </section>
    </>
    );
}

const ListCards : FunctionComponent<{
    elements : ProjectsI | ProgramsI,
    type : "Project" | "Program",
    id : string
}> = props => (
    <div className={style.containerCards} id={props.id}>
        {Object.entries(props.elements).map(([name, Element]) => (
        <Card key={name} name={name} element={Element} type={props.type} />
      ))}
    </div>
)

export default Projects;