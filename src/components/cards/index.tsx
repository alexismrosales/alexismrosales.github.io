import React, { FunctionComponent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardHeader, CardBody, CardFooter, Dialog, DialogBody } from "@material-tailwind/react";

import { Project } from '../../data/Projects';
import { Program } from '../../data/Programs';

import style from './styles.module.css';
import classNames from 'classnames';

interface CardData {
    name : string 
    element : Project | Program,
    type : "Project" | "Program"
}
const CardDataContext = React.createContext<CardData | null>(null);

const CustomCard : FunctionComponent<CardData> = props => {
    let title : JSX.Element = <span/>;
    let text : JSX.Element = <></>;
    let linkgh : string | undefined = "";
    let linkweb : string | undefined = "";
    let tags : string[] = [];
    let path = "";

    const { t, i18n } = useTranslation();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const Item = props.element as Project | Program;
    title = Item.Title;
    linkgh = Item.LinkToProject;
    linkweb = Item.LinkToWeb;
    text = i18n.language === "en" ? Item.en : Item.es;
    tags = i18n.language === "en" ? Item.Tags.en : Item.Tags.es;
   
    path = `img/${props.type}/${props.name}.png`;
    
    return (
        <CardDataContext.Provider value={props}>
            <div className={style.container}>
                <Card className={style.card} placeholder="Card">
                    <CardHeader color="white" className="relative h-100" placeholder="Card Header">
                        <img className={style.cardImg} src={path} alt={props.name} onClick={handleOpen}/>
                    </CardHeader>
                    <CardBody className={style.CardBody} placeholder={`Text of ${props.name}`} >
                        <h1 className={style.CardTitle}>{title}</h1>
                        <br/>
                        <div >
                            {text}
                        </div>
                    </CardBody>
                    <CardFooter className="absolute inset-x-0 bottom-0"  placeholder={`Text of ${props.name}`}>
                        <div>
                            <ListTags tags={tags}/>
                            <hr className='border-double'/>
                            <div className={style.links}>
                                <a href={linkgh} className={classNames(style.link, style.gh)}>
                                    <img className={style.imgGH} src='img/logos/gh_white.png'/>
                                </a>
                                {linkweb !== "" && 
                                <a href={linkweb} className={classNames(style.link, style.web)}>
                                    <img className={style.imgWeb} src='img/logos/web_white.png'/>
                                </a>}
                            </div>
                        </div>
                    </CardFooter>
                </Card>
            </div>
            <Dialog open={open} handler={handleOpen} placeholder='' size={'lg'}>
                <DialogBody placeholder="Focus dialog">
                    <img className={style.dialogImg} src={path} alt={props.name}/>
                </DialogBody>
            </Dialog>
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

