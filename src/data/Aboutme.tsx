import styles from "./styles.module.css"
export type AboutMe = {
    en: { Title: string, date: string, description: string, content: JSX.Element };
    es: { Title: string, date: string, description: string, content: JSX.Element };
    LinkToProject: string;
    LinkToWeb: string;
    Tags: { en: string[]; es: string[] };
};

export interface AboutMeI { [key: string]: AboutMe }

const AboutMe: AboutMeI = {
    AboutMe: {
        en: {
            Title: "About Me",
            date: "",
            description: "",
            content:
                <span>
                    <div className="flex justify-center">
                        <img src="/img/my-photos/1.jpg" className={`${styles.img} h-96`} />
                    </div>
                    <p className="font-bold italic">
                        "Just someone who loves math and computer science. Aspirant Mathematician and Software Engineer. Currently studying Computers Systems Engineering."</p>
                    <br />
                    <p>
                        I am a curious, determined and optimistic person. I love challenges and I enjoy learning different things, especially about computer science and mathematics.
                        <br></br>
                        Currently I am interested in <span>back-end web development</span>, <span>AI (Machine Learning)</span> and statistics, I'm a newbie on this topics but I would like to delve deeper into these areas of knowledge.
                        <br></br>
                        For me, computing and mathematics are the tools of the present and the future, because they allow us to solve complex problems and create new forms of expression.
                    </p>
                </span>

        },
        es: {
            Title: "Sobre Mí",
            date: "",
            description: "",
            content:
                <span>
                    <div className="flex justify-center">
                        <img src="/img/my-photos/1.jpg" className={`${styles.img} h-96`} />
                    </div>

                    <p className="font-bold italic">"Alguien que ama las matemáticas y la ciencia de la computación. Aspirante a matemático e ingeniero de software. Actualmente estudiando Ingeniería de Sistemas Computacionales."</p>
                    <p>
                        Soy una persona curiosa, determinada y optimista. Me encantan los desafíos y disfruto aprendiendo cosas diferentes, especialmente sobre ciencias de la computación y matemáticas.
                        <br></br>
                        Actualmente estoy interesado en el desarrollo web back-end, IA (Aprendizaje Automático) y estadística, soy un novato en estos temas, pero me gustaría profundizar en estas áreas del conocimiento.
                        <br></br>
                        Para mí, la informática y las matemáticas son las herramientas del presente y del futuro, porque nos permiten resolver problemas complejos y crear nuevas formas de expresión.
                    </p>

                </span>
            ,
        },
        LinkToProject: "",
        LinkToWeb: "",
        Tags: { en: [], es: [] }
    }
}
export default AboutMe;
