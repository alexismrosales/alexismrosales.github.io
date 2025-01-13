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
    FileDriver: {
        en: {
            Title: "FileDriver",
            date: "November 2024",
            description: "A client-server application using UDP for fast and efficient file transfers, allowing users to upload, download, and list files with simple commands.",
            content: (
                <span>
                    <img src="/img/Project/FileDriver.png" className={styles.img} />
                    <p>
                        FileDriver allows you to transfer files to your server using terminal commands via the <a className={styles.link} href="https://www.ibm.com/docs/en/aix/7.3?topic=protocols-user-datagram-protocol">UDP protocol</a>.
                        The application was entirely developed in the Go programming language due to its simplicity, speed, and
                        efficiency in handling data and network connections.
                    </p>
                    <br />
                    <h2 className={styles.subtitle}>General Structure</h2>
                    <ul className={styles.list}>
                        <li>
                            <span className={styles.marked}>Client (CLI)</span>: Users can interact via commands to perform operations such as
                            creating, deleting, and navigating folders, as well as uploading and downloading files.
                            The CLI was built using <a className={styles.link} href="https://github.com/urfave/cli/">urfave/cli</a>,
                            a library well-known for its ease and flexibility in creating applications of this type.
                        </li>
                        <li>
                            <span className={styles.marked}>Server</span>: It receives files sent from the client, organizes them
                            into a hierarchical folder structure, and manages operations such as deletion, creation, and storage of files.
                            All traffic between the client and the server is handled reliably through the UDP protocol.
                        </li>
                        <li>
                            <span className={styles.marked}>File Management</span>: To send and receive files between the client and
                            the server, a fragmentation system was designed to divide files into manageable blocks called "chunks."
                            This ensures efficient transmission even for large files.
                        </li>
                    </ul>
                    <br />
                    <h2 className={styles.subtitle}>File Management</h2>
                    <p>
                        On the client side, FileDriver allows for reading and writing files locally, as well as converting them into a serialized
                        format for sending to the server. The server handles receiving the files, assembling them, and storing them in the
                        designated location, ensuring data integrity.
                    </p>
                    <br />
                    <h2 className={styles.subtitle}>File Fragmentation and Reconstruction</h2>
                    <p>
                        To ensure efficient file transmission using the UDP protocol, which does not guarantee ordered delivery, a block management
                        system known as the "Chunk Manager" was implemented. This system splits files into fixed-size fragments (chunks) before
                        sending them. At the destination, the chunks are reorganized and reassembled using a reconstruction system, ensuring that
                        files arrive complete and in the correct order.
                    </p>
                    <br />
                    <h2 className={styles.subtitle}>Selective Reject Protocol</h2>
                    <p>
                        FileDriver implements a simple version of the <a className={styles.link} href="https://www.geeksforgeeks.org/sliding-window-protocol-set-3-selective-repeat/">Selective Reject Protocol</a> for error management during file transmission. This protocol allows the retransmission of only those chunks
                        that were not received correctly, optimizing transmission time and reducing network load. Each chunk includes a unique
                        index that enables the receiver to identify and request retransmission of specific fragments. This approach ensures
                        reliable transfers even in high-latency or packet-loss environments.
                    </p>
                    <br />
                    <img src="/img/Project/FileDriver2.jpg" className={styles.img} />
                    <p className={styles.imageref}>Image by GeeksForGeeks</p>
                    <br />
                    <p>If you want to try the application or explore the code in more detail, I recommend visiting my repository. There, you will find
                        a more detailed explanation of the installation process and usage of the application. 😊</p>
                </span>
            ),
        },
        es: {
            Title: "FileDriver",
            date: "Noviembre 2024",
            description: "Una aplicación cliente-servidor que utiliza UDP para transferir archivos de manera rápida y eficiente, permitiendo subir, descargar y listar archivos mediante comandos simples.",
            content: (
                <span>
                    <img src="/img/Project/FileDriver.png" className={styles.img} />
                    <p>
                        FileDriver te permite transferir archivos a tu servidor utilizando comandos en la terminal mediante el <a className={styles.link} href="https://www.ibm.com/docs/en/aix/7.3?topic=protocols-user-datagram-protocol">protocolo UDP</a>.
                        La aplicación fue completamente desarrollada en el lenguaje de programación Go debido a su simplicidad, rapidez y
                        eficiencia en la manipulación de datos y conexiones de red.
                    </p>
                    <br />
                    <h2 className={styles.subtitle}>Estructura General</h2>
                    <ul className={styles.list}>
                        <li>
                            <span className={styles.marked}>Cliente (CLI)</span>: El usuario puede interactuar mediante comandos para
                            realizar operaciones como crear, eliminar y navegar por carpetas, además de subir y descargar archivos.
                            Para crear el CLI se utilizó <a className={styles.link} href="https://github.com/urfave/cli/">urfave/cli</a>, una librería destacada por su facilidad y flexibilidad en
                            la creación de aplicaciones de este tipo.
                        </li>
                        <li>
                            <span className={styles.marked}>Servidor</span>: Recibe los archivos enviados desde el cliente, los organiza
                            en una estructura jerárquica de carpetas, y gestiona operaciones como eliminación, creación y almacenamiento
                            de archivos. Todo el tráfico entre el cliente y el servidor se realiza de manera confiable mediante el protocolo UDP.
                        </li>
                        <li>
                            <span className={styles.marked}>Gestión de archivos</span>: Para enviar y recibir archivos entre el cliente y
                            el servidor, se diseñó un sistema de fragmentación que permite dividir los archivos en bloques manejables
                            denominados "chunks". Esto garantiza una transmisión eficiente incluso para archivos de gran tamaño.
                        </li>
                    </ul>
                    <br />
                    <h2 className={styles.subtitle}>Gestión de Archivos</h2>
                    <p>
                        En el cliente, permite leer y escribir archivos
                        de forma local, además de convertirlos a un formato serializado para enviarlos al servidor. El servidor, por su parte,
                        se encarga de recibir los archivos, ensamblarlos y almacenarlos en la ubicación designada, asegurando la integridad
                        de los datos.
                    </p>
                    <br />
                    <h2 className={styles.subtitle}>Fragmentación y Reconstrucción de Archivos</h2>
                    <p>
                        Para garantizar la transmisión eficiente de archivos mediante el protocolo UDP, que no ofrece garantías de
                        entrega ordenada, se implementó un sistema de manejo de bloques mediante un "Chunk Manager". Este sistema
                        divide los archivos en fragmentos (chunks) de tamaño fijo antes de su envío. En el destino, los chunks se
                        reorganizan y ensamblan utilizando un sistema de reconstrucción, asegurando que los archivos lleguen
                        completos y en el orden correcto.
                    </p>
                    <br />
                    <h2 className={styles.subtitle}>Protocolo de Rechazo Selectivo</h2>
                    <p>
                        FileDriver implementa una implementación sencilla del protocolo de <a className={styles.link} href="https://www.geeksforgeeks.org/sliding-window-protocol-set-3-selective-repeat/">rechazo selectivo (Selective Reject Protocol)</a> para la gestión
                        de errores durante la transmisión de archivos. Este protocolo permite reenviar únicamente los chunks
                        que no se recibieron correctamente, optimizando el tiempo de transmisión y reduciendo la carga en la
                        red. Cada chunk incluye un índice único que permite al receptor identificar y solicitar la retransmisión
                        de fragmentos específicos. Este enfoque asegura la fiabilidad de las transferencias incluso en entornos
                        con alta latencia o pérdida de paquetes.
                    </p>
                    <br />
                    <img src="/img/Project/FileDriver2.jpg" className={styles.img} />
                    <p className={styles.imageref}>Imagen por GeeksForGeeks</p>
                    <br />
                    <p>Si deseas probar la aplicación o ver el código más a fondo te recomiendo visitar mi repositorio, ahi explico mas a detalle la instalación y uso de la aplicación. 😊</p>
                </span>
            ),
        },
        LinkToProject: "https://github.com/alexismrosales/FileDriver",
        LinkToWeb: "",
        Tags: {
            en: [
                "Go",
                "UDP Protocol",
                "Networks",
                "CLI App",
                "Personal Project",
            ],
            es: [
                "Go",
                "Procolo UDP",
                "Networks",
                "CLI App",
                "Proyecto Personal",
            ],
        },

    },
    URLShortener: {
        en: {
            Title: "AlxmrURLShortener",
            date: "Marzo 2024",
            description: "Web app for shortening URLs built with React/TypeScript and Java (Spring Boot). Currently deployed on Heroku.",
            content: (
                <span>
                    <img src="/img/Project/URLShortener.png" className={styles.img} />
                    <p>
                        It is a simple web app that shorten URLs. It was developed using React/Typescript for the client app and
                        Java (Spring Boot) with PostgreSQL and deployed in Heroku using a
                        custom domain.
                    </p>
                    <br />
                    <ul className={styles.list}>
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
                            I would like in a future use the API to develop a CLI app for Linux.
                        </li>
                    </ul>
                    <br />
                    <p>
                        During development, I encountered several challenges. The first was
                        selecting an appropriate design pattern. Since the application was intended to be a REST API,
                        I decided to use the
                        <a className={styles.link} href="https://tom-collings.medium.com/controller-service-repository-16e29a4684e5"> Controller-Service-Repository </a>
                        design pattern, where each layer is responsible for specific tasks.
                    </p>
                    <br />
                    <p>
                        However, the biggest challenge I faced while creating the application was assigning a
                        <span className="italic">short URL</span> to each URL provided by the user.
                        To achieve this, I used the
                        <a className={styles.link} href="https://www.movable-type.co.uk/scripts/sha256.html"> SHA-256 </a>
                        encoding algorithm, which generates a unique hash for every user-provided URL.
                        Then, I used the first 5 characters of the hash as a unique "ID" to search in the database
                        for its corresponding <span className="italic"> long URL</span>.
                    </p>
                    <br />
                    <p>
                        If you want to see a more technical explanation of the app's implementation, you can visit
                        <a className={styles.link} href="https://github.com/alexismrosales/url_shortener"> my GitHub repository</a>, where I explain the functionality and design of the app in greater detail.
                    </p>
                </span >
            ),

        },
        es: {
            Title: "AlxmrURLShortener",
            date: "Marzo 2024",
            description: "Aplicación web para acortar URLs desarrollada con React/TypeScript y Java (Spring Boot). Actualmente desplegada en Heroku.",
            content: (
                <span>
                    <img src="/img/Project/URLShortener.png" className={styles.img} />
                    <p>
                        Aplicación web simple que acorta URLs. Fue desarrollado utilizando React/Typescript para la
                        aplicación cliente y Java (Spring Boot) con PostgreSQL y desplegado en
                        Heroku utilizando un dominio personalizado.

                    </p>
                    <br />
                    <ul className={styles.list}>
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
                            Me gustaría en un futuro usar la API para crear una CLI app especificamente para Linux.
                        </li>
                    </ul>
                    <br />

                    <p>
                        Durante el desarrollo me encontré con diferentes retos. El primero fue
                        elegir un patrón de diseño adecuado. Dado que la aplicación fue creada con la
                        intención de ser una REST API, opté por usar el patrón de diseño
                        <a className={styles.link} href="https://tom-collings.medium.com/controller-service-repository-16e29a4684e5"> Controlador-Servicio-Repositorio</a>, donde cada capa se encarga de tareas específicas.
                    </p>
                    <br />
                    <p>
                        Sin embargo, el mayor reto al que me enfrenté al crear la aplicación fue asignar un
                        <span className="italic"> URL corto</span> a cada URL proporcionado por el usuario.
                        Para lograrlo, utilicé el algoritmo de codificación
                        <a className={styles.link} href="https://www.movable-type.co.uk/scripts/sha256.html"> SHA-256</a>, el cual genera un "hash" único para cada URL ingresado por el usuario.
                        Luego, tomé los primeros 5 caracteres del hash como un "ID" único para poder buscar en la base de datos el
                        <span className="italic"> URL largo</span> correspondiente.
                    </p>
                    <br />
                    <p>
                        Si deseas conocer más detalles técnicos sobre la implementación de la aplicación, puedes visitar
                        <a className={styles.link} href="https://github.com/alexismrosales/url_shortener"> mi repositorio</a> en GitHub, donde explico a mayor profundidad el funcionamiento de la app y su diseño.
                    </p>

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
            date: "February 2024",
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
            date: "Febrero 2024",
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
            date: "July 2022",
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
            date: "Junio 2022",
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
            date: "December 2021",
            description: "School web app developed in 2022 using LAMP and JavaScript. It manages student registrations, assigns schedules based on availability.",
            content: (
                <span>
                    <img src="/img/Project/RegisterForStudents.png" className={styles.img} />
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
            date: "December 2021",
            description: "Aplicación web escolar desarrollada en 2022 con LAMP y JavaScript. Permite gestionar registros de estudiantes, asignar horarios según disponibilidad y descargar un PDF.",
            content: (
                <span>
                    <img src="/img/Project/RegisterForStudents.png" className={styles.img} />
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
            date: "2021 to Present",
            description: "Repository with solutions to coding problems, avoiding brute force to optimize time and space. Constantly updated, mainly in Go and C++.",
            content: (
                <span>
                    <img src="/img/Project/SomeCodes.png" className={styles.img} />
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
            date: "2021 al presente",
            description: "Repositorio con soluciones a problemas de programación, evitando fuerza bruta para optimizar tiempo y espacio. Actualizado constantemente, principalmente en Go y C++.",
            content: (
                <span>
                    <img src="/img/Project/SomeCodes.png" className={styles.img} />
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
