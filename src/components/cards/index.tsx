import React, { useEffect, useContext, FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardHeader, CardBody, CardFooter } from "@material-tailwind/react";

import { Project } from '../../data/Projects';
import { Program } from '../../data/Programs';

import style from './styles.module.css';
import classNames from 'classnames';
import Projects from '../projects&programs';

interface CardData {
    name : string 
    element : Project | Program,
    type : "Project" | "Program"
}
const CardDataContext = React.createContext<CardData | null>(null);

const CustomCard : FunctionComponent<CardData> = props => {
    let title : JSX.Element = <span/>;
    let text = <span/>;
    let linkgh : string | undefined = "";
    let linkweb : string | undefined = "";
    let tags : string[] = [];

    const { t, i18n } = useTranslation();

    const Item = props.element as Project | Program;
    title = Item.Title;
    linkgh = Item.LinkToProject;
    linkweb = Item.LinkToWeb;
    text = i18n.language === "en" ? Item.en : Item.es;
    tags = i18n.language === "en" ? Item.Tags.en : Item.Tags.es;
    return (
        <CardDataContext.Provider value={props}>
            <div className={style.container}>
                <Card className={style.card} placeholder="Card">
                    <CardHeader color="white" className="relative h-100" placeholder="Card Header">
                        <img className={style.cardImg} src={`img/${props.type}/${props.name}.png`} alt={props.name}/>
                    </CardHeader>
                    <CardBody className={style.CardBody} placeholder={`Text of ${props.name}`} >
                        {text}
                    </CardBody>
                    <CardFooter className="pt-0"  placeholder={`Text of ${props.name}`}>
                        <div>
                            <ListTags tags={tags}/>
                            <div className={style.links}>
                                <a href={linkgh} className={classNames(style.link, style.gh)}>
                                    "GitHub"
                                </a>
                                {linkweb !== "" && 
                                <a href={linkweb} className={classNames(style.link, style.web)}>
                                    "Web"
                                </a>}
                            </div>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </CardDataContext.Provider>
    )
}

const ListTags : FunctionComponent <{ tags : string[] }> = ({ tags }) => (
    <div className={style.tags}>
        {tags.map((tag, index) => (
            <span key={index} className={style.tag}>{tag}</span>
        ))}
    </div>
)

export default CustomCard;