import styles from "./styles.module.css"
export type Project = {
    en: { Title: string, date: string, description: string, content: JSX.Element };
    es: { Title: string, date: string, description: string, content: JSX.Element };
    LinkToProject: string;
    LinkToWeb: string;
    Tags: { en: string[]; es: string[] };
};

export interface ProjectsI {
    [key: string]: Project;
}

const Projects: ProjectsI = {
    URLShortener: {
        en: {
            Title: "AlxmrURLShortener",
            date: "April 8 2023",
            description: "Web app for shortening URLs built with React/TypeScript and Java (Spring Boot). Currently deployed on Heroku.",
            content: (
                <span>
                    <img src="/img/Project/URLShortener.png" className={styles.img} />
                    <p>
                        This project was made in march 2024. It is a web app that shortens
                        URLs. It was developed using React/Typescript for the client app and
                        Java (Spring Boot) with PostgreSQL and deployed in Heroku using a
                        custom domain.
                    </p>
                    <br />
                    <ul className="list-disc list-inside">
                        <li>
                            It has a simple interface where you can paste the URL you want to
                            shorten and it will generate a new URL.
                        </li>
                        <br />
                        <li>
                            It is plan to have a statistics page where you can see the number of
                            times the shortened URL has been visited.
                        </li>
                        <br />
                        <li>
                            The app still in development and also is planned to have a CLI app
                            for linux distros.
                        </li>
                    </ul>
                </span>
            ),

        },
        es: {
            Title: "AlxmrURLShortener",
            date: "Abril 8 2023",
            description: "Aplicación web para acortar URLs desarrollada con React/TypeScript y Java (Spring Boot). Actualmente desplegada en Heroku.",
            content: (
                <span>
                    <img src="/img/Project/URLShortener.png" className={styles.img} />
                    <p>
                        Este proyecto fue realizado en marzo de 2024. Es una aplicación web
                        que acorta URLs. Fue desarrollado utilizando React/Typescript para la
                        aplicación cliente y Java (Spring Boot) con PostgreSQL y desplegado en
                        Heroku utilizando un dominio personalizado.
                    </p>
                    <br />
                    <ul className="list-disc list-inside">
                        <li>
                            Tiene una interfaz simple donde puedes pegar la URL que deseas
                            acortar y generará una nueva URL.
                        </li>
                        <br />
                        <li>
                            Se planea tener una página de estadísticas donde puedas ver el
                            número de veces que se ha visitado la URL acortada.
                        </li>
                        <br />
                        <li>
                            {" "}
                            La aplicación aun sigue en desarrollo, también esta planeado tener
                            una CLI app especificamente para Linux.
                        </li>
                    </ul>
                </span>
            )
        },
        LinkToProject: "https://github.com/alexismrosales/url_shortener",
        LinkToWeb: "https://alxmr.tech",
        Tags: {
            en: [
                "Spring Boot",
                "PostgreSQL",
                "React",
                "Typescript",
                "Personal Project",
            ],
            es: [
                "Spring Boot",
                "PostgreSQL",
                "React",
                "Typescript",
                "Proyecto Personal",
            ],
        },
    },
    LoveAnalysis: {
        en: {
            Title: "LoveAnalysis",
            date: "April 8 2022",
            description: "Web app created for Valentine's Day to analyze WhatsApp messages using an API built with Python. It uses React and Tailwind to display interesting data from the conversation.",
            content: (
                <span>
                    <img src="/img/Project/LoveAnalysis.png" className={styles.img} />
                    <p>
                        I made this app for Valentine's Day (2024) for my girlfriend. It is a web app that performs a small data analysis using an API that analyzes our WhatsApp messages.
                    </p>
                    <ul className="list-disc list-inside">
                        <br />
                        <li>
                            The API was developed with Python analyzing more than 40,000 WhatsApp messages from our conversation, mainly using Pandas (for the analysis) and Flask (for the server).
                        </li>
                        <br />
                        <li>
                            Using React and Tailwind, the website was sectioned into different parts showing data I found interesting from our WhatsApp conversation.
                        </li>
                    </ul>
                    <b>
                        Note: If the webpage does not show the data, just wait a moment. I am using a free webserver.
                    </b>
                </span>
            ),
        },
        es: {
            Title: "LoveAnalysis",
            date: "Abril 8 2022",
            description: "Aplicación web creada para el Día de San Valentín que analiza mensajes de WhatsApp usando una API desarrollada con Python. Utiliza React y Tailwind para mostrar datos interesantes de la conversación.",
            content: (
                <span>
                    <img src="/img/Project/LoveAnalysis.png" className={styles.img} />
                    <p>
                        Hice esta aplicación para el día de San Valentín (2024) para mi novia. Es una aplicación web que realiza un pequeño análisis de datos utilizando una API que analiza nuestros mensajes de WhatsApp.
                    </p>
                    <ul className="list-disc list-inside">
                        <br />
                        <li>
                            La API fue desarrollada con Python analizando más de 40,000 mensajes de WhatsApp de nuestra conversación, principalmente usando Pandas (para el análisis) y Flask (para el servidor).
                        </li>
                        <br />
                        <li>
                            Usando React y Tailwind, el sitio web se dividió en diferentes partes que muestran datos interesantes de nuestra conversación de WhatsApp.
                        </li>
                    </ul>
                </span>
            ),
        },
        LinkToProject: "https://github.com/alexismrosales/love_analysis_web_app/",
        LinkToWeb: "https://alexismrosales.github.io/love_analysis_web_app/",
        Tags: {
            en: ["React", "Tailwind", "Python", "Pandas", "Personal Project"],
            es: ["React", "Tailwind", "Python", "Pandas", "Proyecto Personal"],
        },
    },
    Interprex: {
        en: {
            Title: "Interprex",
            date: "April 8 2022",
            description: "It is an interpreter that evaluates structures like loops, conditionals, and arithmetic operations in three stages: scanner, parser, and semantic analyzer.",
            content: (
                <span>
                    <img src="/img/Project/Interprex.png" className={styles.img} />
                    <p>
                        This project was made in Java at mid-2023 in collaboration with my partner Aranza for my compilers course. It is an interpreter where you can program different structures like loops, conditionals, and solve arithmetic operations.
                    </p>
                    <br />
                    <ul className="list-disc list-inside">
                        <li>
                            The code is evaluated with three different stages.
                            <ul className="list-disc list-inside">
                                <li>Scanner: it verifies if the lexic of the code is valid.</li>
                                <li>
                                    Parser: syntax is verified and all elements are saved in a stack.
                                </li>
                                <li>
                                    Semantic analyzer: it converts the stack into an AST, while traversing the tree solving all assigned operations.
                                </li>
                            </ul>
                        </li>
                        <br />
                        <li>
                            Every stage was solved using different algorithms from computational theory and compilers.
                        </li>
                    </ul>
                </span>
            ),
        },
        es: {
            Title: "Interprex",
            date: "April 8 2022",
            description: "Es un intérprete que evalúa estructuras como bucles, condicionales y operaciones aritméticas en tres etapas: escáner, analizador sintáctico y analizador semántico.",
            content: (
                <span>
                    <img src="/img/Project/Interprex.png" className={styles.img} />
                    <p>
                        Este proyecto fue realizado en Java a mediados de 2023 en colaboración con mi compañera Aranza para mi curso de compiladores. Es un intérprete donde puedes programar diferentes estructuras como bucles, condicionales y resolver operaciones aritméticas.
                    </p>
                    <br />
                    <ul className="list-disc list-inside">
                        <li>
                            El código se evalúa con tres etapas diferentes.
                            <ul className="list-decimal list-inside">
                                <li>Escáner: verifica si el léxico del código es válido.</li>
                                <li>
                                    Analizador sintáctico: se verifica la sintaxis y se guardan todos los elementos en una pila.
                                </li>
                                <li>
                                    Análisis semántico: convierte la pila en un AST, mientras recorre el árbol resolviendo todas las operaciones asignadas.
                                </li>
                            </ul>
                        </li>
                        <br />
                        <li>
                            Cada etapa se resolvió utilizando diferentes algoritmos de teoría computacional y compiladores.
                        </li>
                    </ul>
                </span>
            ),
        },
        LinkToProject: "https://github.com/alexismrosales/interpretex",
        LinkToWeb: "",
        Tags: {
            en: ["Java", "Computer Theory", "Algorithms", "OOP"],
            es: ["Java", "Teoría de la Computación", "Algoritmos", "POO"],
        },
    },
    RegisterForStudents: {
        en: {
            Title: "RegisterForStudents",
            date: "April 8 2022",
            description: "School web app developed in 2022 using LAMP and JavaScript. It manages student registrations, assigns schedules based on availability.",
            content: (
                <span>
                    <img src="/img/Program/RegisterForStudents.png" className={styles.img} />
                    <p>
                        This web app was a school project created at the end of 2022. Developed with the LAMP stack (Linux, Apache Server, MySQL, and PHP), and JavaScript using DOM.
                    </p>
                    <br />
                    <ul className="list-disc list-inside">
                        <li>
                            Two roles were created: one for students and another for administrators.
                        </li>
                        <br />
                        <li>
                            The app allows students to create a new registration and assigns them a schedule depending on classroom and hour availability. Once registered, a PDF with the details will be available for download.
                        </li>
                        <br />
                        <li>
                            If you are an admin, you have full permissions to modify data for any student, including their schedule.
                        </li>
                    </ul>
                </span>),
        },
        es: {
            Title: "RegisterForStudents",
            date: "Abril 8 2022",
            description: "Aplicación web escolar desarrollada en 2022 con LAMP y JavaScript. Permite gestionar registros de estudiantes, asignar horarios según disponibilidad y descargar un PDF.",
            content: (
                <span>
                    <img src="/img/Program/RegisterForStudents.png" className={styles.img} />
                    <p>
                        Esta aplicación web fue un proyecto escolar creado a finales de 2022. Desarrollado con el stack LAMP (Linux, Apache Server, MySQL y PHP), y JavaScript utilizando DOM.
                    </p>
                    <br />
                    <ul className="list-disc list-inside">
                        <li>
                            Se crearon dos roles: uno para los estudiantes y otro para los administradores.
                        </li>
                        <br />
                        <li>
                            La aplicación permite a los estudiantes crear un nuevo registro y asignarles un horario dependiendo de la disponibilidad de aulas y horas. Una vez registrado, un PDF con los detalles estará disponible para descargar.
                        </li>
                        <br />
                        <li>
                            Si eres administrador, tienes permisos completos para modificar datos de cualquier estudiante, incluido su horario.
                        </li>
                    </ul>
                </span>
            ),
        },
        LinkToProject: "https://github.com/alexismrosales/escom_web_app",
        LinkToWeb: "",
        Tags: {
            en: ["PHP", "MySQL", "Bootstrap", "Linux Server"],
            es: ["PHP", "MySQL", "Bootstrap", "Linux Server"],
        },
    },
    SomeCodes: {
        en: {
            Title: "SomeCodes",
            date: "Abril 8 2022",
            description: "Repository with solutions to coding problems, avoiding brute force to optimize time and space. Constantly updated, mainly in Go and C++.",
            content: (
                <span>
                    <img src="/img/Program/SomeCodes.png" className={styles.img} />
                    <p>
                        I've been solving different coding problems and here's a repository
                        with all my solutions.
                        <br />
                        <br />
                        I always try to approach the problem avoiding brute force to get best
                        time and space complexity. The repository is constantly updated.
                        <br />
                        <br />
                        Most of my solution were made in C++ for convenience.
                    </p>
                </span>
            )
        },
        es: {
            Title: "SomeCodes",
            date: "Abril 8 2022",
            description: "Repositorio con soluciones a problemas de programación, evitando fuerza bruta para optimizar tiempo y espacio. Actualizado constantemente, principalmente en Go y C++.",
            content: (
                <span>
                    <img src="/img/Program/SomeCodes.png" className={styles.img} />
                    <p>
                        He estado resolviendo diferentes problemas de programción y aquí hay
                        un repositorio con todas mis soluciones.
                        <br />
                        <br />
                        Siempre intento abordar el problema evitando la fuerza bruta para
                        obtener la mejor complejidad de tiempo y espacio. El repositorio se
                        actualiza constantemente.
                        <br />
                        <br />
                        La mayoría de mis soluciones se hicieron en C++ por conveniencia.
                    </p>
                </span>
            )
        },
        LinkToProject: "https://github.com/alexismrosales/cpp",
        LinkToWeb: "",
        Tags: {
            en: ["Competitive Programming", "Go", "C++", "Python", "Algorithms"],
            es: ["Programación Competitiva", "Go", "C++", "Python", "Algoritmos"],
        },
    },
};
export default Projects;
