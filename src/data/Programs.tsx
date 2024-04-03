export type Program = {
    Title : JSX.Element,
    en : JSX.Element,
    es : JSX.Element,
    LinkToProject : string,
    LinkToWeb : string,
    Tags : {en : string[], es: string[]}
}

export interface ProgramsI { [key: string]: Program }

const Programs : ProgramsI = {
   /*  Portfolio : {
        Title : (
            <h1>Portfolio</h1>
        ),
        en : (
            <p>
                This is my personal portfolio, I made it to show my projects and skills. The website is made with React and Typescript, using different libraries like Tailwind and i18next.
                <br/><br/>
                The website is responsive and has a language toggle option, it is hosted in GitHub Pages.
            </p>
        ),
        es : (
            <p>
                Este es mi portafolio personal, lo hice para mostrar mis proyectos y habilidades. El sitio web está hecho con React y Typescript, utilizando diferentes bibliotecas como React Router Dom y i18next.
                <br/><br/>
                El sitio web es responsivo y tiene una opción de cambio de idioma, está alojado en GitHub Pages.
            </p>
        ),
        LinkToProject : "https://github.com/alexismrosales/alexismrosales.github.io",
        LinkToWeb : "https://alexismrosales.github.io/",
        Tags : {
            en : ["React","Typescript","Tailwind","Personal Project"],
            es : ["React","Typescript","Tailwind","Personal Project"]
        }
    }, */
    ToDoList : {
        Title : (
            <h1>ToDoList</h1>
        ),
        en : (
            <p>
                This is a web app I made to practice my skills with React and Spring Boot(Java). It is a simple to do list where you can add, delete and mark as done the tasks you have to do. 
                <br/><br/>
                The app is using the endpoints given by Spring Boot, using different CRUD operations with HTTP request like POST, GET and DELETE, saving the tasks of the browser into a database in MySQL.
                <br/><br/>
                The database table for the tasks is created with Lombok and fetching and the data is fetched with with Axios.
            </p>
        ),
        es : (
            <p>
                Esta es una aplicación web que hice para practicar mis habilidades con React y Spring Boot (Java). Es una lista de tareas pendientes simple donde puedes agregar, eliminar y marcar como hechas las tareas que tienes que hacer.
                <br/><br/>
                La aplicación está utilizando los puntos finales dados por Spring Boot, utilizando diferentes operaciones CRUD con solicitudes HTTP como POST, GET y DELETE, guardando las tareas del navegador en una base de datos en MySQL.
                <br/><br/>
                La tabla de la base de datos para las tareas se crea con Lombok y se obtiene los datos con Axios.
            </p>
        ),
        LinkToProject : "https://github.com/alexismrosales/to_do_list_app",
        LinkToWeb : "",
        Tags : {
            en : ["React","Spring Boot","Java","MySQL","One Day Project"],
            es : ["React","Spring Boot","Java","MySQL","Proyecto de un día"]
        }
    },
    DualSimplexAlgorithm : {
        Title : (
            <h1>DualSimplexAlgorithm</h1>
        ),
        en : (
            <p>
                The program was created to understand how the algorithm works and solve faster this problems. The app was developed at the beginning of 2024 using Tkinter for the GUI and other libraries like Pandas and Numpy.
                <br/><br/>
                The solution solve the linear programming algorithm dual simplex with max and min Z functions.
                <br/><br/>
                Starting with the input, it creates dinamic inputs and then generate all possible solutions, showing every necesary iteration to get the values of the variables.
            </p>
        ),
        es : (
            <p>
                El programa fue creado para entender cómo funciona el algoritmo y resolver más rápido estos problemas. La aplicación fue desarrollada a principios de 2024 utilizando Tkinter para la GUI y otras bibliotecas como Pandas y Numpy.
                <br/><br/>
                La solución resuelve el algoritmo de programación lineal dual simplex con funciones Z máximas y mínimas.
                <br/><br/>
                Comenzando con la entrada, crea entradas dinámicas y luego genera todas las soluciones posibles, mostrando cada iteración necesaria para obtener los valores de las variables.
            </p>
        ),
        LinkToProject : "https://github.com/alexismrosales/dual_simplex_desktop_app",
        LinkToWeb : "",
        Tags : {
            en : ["Python3","Algorithms","Tkinter","One Day Project"],
            es : ["Python3","Algoritmos","Tkinter","Proyecto de un día"]
        }
    },
    BestSubwayRoute : {
        Title : (
            <h1>BestSubwayRoute</h1>
        ),
        en : (
            <p>
                I made this program with the logic programming language Prolog in an extra course I took at the Computer Research Center (CIC IPN). 
                <br/><br/>
                Using the CDMX subway map, the program generate the best and worst route to take based on different parameters like travel time, train transfer and others.
                <br/><br/>
                Representing the map of the subway as a graph, creating every possible route the program find the best and worst route with backtracking.
            </p>
        ),
        es : (
            <p>
                Hice este programa con el lenguaje de programación lógica Prolog en un curso extra que tomé en el Centro de Investigación en Computación (CIC IPN).
                <br/><br/>
                Usando el mapa del metro de la CDMX, el programa genera la mejor y peor ruta a tomar basándose en diferentes parámetros como el tiempo de viaje, la transferencia de trenes y otros.
                <br/><br/>
                Representando el mapa del metro como un grafo, creando todas las rutas posibles, el programa encuentra la mejor y peor ruta con backtracking.
            </p>
        ),
        LinkToProject : "https://github.com/alexismrosales/best-route-mexico-city-subway",
        LinkToWeb : "",
        Tags : {
            en : ["Prolog","Graphs","Logic Language","Favs"],
            es : ["Prolog","Gráficas","Lenguaje Lógico","Favs"]
        }
    },
    SierpinskiTriangle : {
        Title : (
            <h1>SierpinskiTriangle</h1>
        ),
        en : (
            <p>
                I did this desktop program to start learning of how to use Open GL API with the library GLUT. 
                <br/><br/>
                Giving the level of depth, the fractal of the Sierpinkski triangle is drawn. I would like to continue making small projects like thiss using this library to represent cool fractals and animations using famous algorithms.        
            </p>
        ),
        es : (
            <p>
                Hice este programa de escritorio para comenzar a aprender cómo usar la API Open GL con la biblioteca GLUT.
                <br/><br/>
                Dando el nivel de profundidad, se dibuja el fractal del triángulo de Sierpinkski. Me gustaría seguir haciendo pequeños proyectos como este usando esta biblioteca para representar fractales y animaciones interesantes usando algoritmos famosos.
            </p>
        ),
        LinkToProject : "https://github.com/alexismrosales/sierpinski-triangle-opengl",
        LinkToWeb : "",
        Tags : {
            en : ["C++","OpenGL","GLUT","Fractals"],
            es : ["C++","OpenGL","GLUT","Fractales"]
        }
    },
    LongestCommonPrefix : {
        Title : (
            <h1>LongestCommonPrefix</h1>
        ),
        en : (
            <p>
                It is an unfinished scholar project for my design and analysis of algorithms course. It is a web were the problem "Longest common prefix" is solved usign brute force and then solving it using the divide and conquer paradigm.
                <br/><br/>
                Given a string as input the web shows an small animation of the divide and conquer algorithm solving the problem.
                <br/><br/>
                The divide and conquer animation is complete but the brute force one is incomplete.
            </p>
        ),
        es : (
            <p>
                Es un proyecto académico inacabado para mi curso de diseño y análisis de algoritmos. Es una web donde se resuelve el problema "Prefijo común más largo" usando fuerza bruta y luego resolviéndolo usando el paradigma de divide y vencerás.
                <br/><br/>
                Dada una cadena como entrada, la web muestra una pequeña animación del algoritmo de divide y vencerás resolviendo el problema.
                <br/><br/>
                La animación de divide y vencerás está completa, pero la de fuerza bruta está incompleta.
            </p>
        ),
        LinkToProject : "https://github.com/alexismrosales/div_and_con_web_algorithm",
        LinkToWeb : "",
        Tags : {
            en : ["HTML","CSS","Javascript","One Day Project"],
            es : ["HTML","CSS","Javascript","Proyecto de un día"]
        }
    },
    TheGeniusOfTheStories : {
        Title : (
            <h1>TheGeniusOfTheStories</h1>
        ),
        en : (
            <p className="card-text">
                This is a project I made at my data structure course, it is a game where the program try to guess what story, movie or novel you are thinking about. 
                <br/><br/>
                You have the option to create a new database or add an existing database where all the data is charged, and taking decisions using a binary tree the program try to guess.
                <br/><br/>
                You win when the program has no more guesses and you have the option to add the story you are thinking about.
            </p>
        ),
        es : (
            <p>
                Este es un proyecto que hice en mi curso de estructura de datos, es un juego donde el programa intenta adivinar de qué historia, película o novela estás pensando.
                <br/><br/>
                Tienes la opción de crear una nueva base de datos o agregar una base de datos existente donde se carga toda la información, y tomando decisiones usando un árbol binario, el programa intenta adivinar.
                <br/><br/>
                Ganas cuando el programa no tiene más conjeturas y tienes la opción de agregar la historia en la que estás pensando.
            </p>
        ),
        LinkToProject : "https://github.com/alexismrosales/the_genius_of_the_stories",
        LinkToWeb : "",
        Tags : {
            en : ["C++","First Projects","Data Structures"],
            es : ["C++","Primeros Proyectos","Data Structures"]
        }
    }
}
export default Programs;