export type Project = {
  Title: JSX.Element,
  en: JSX.Element,
  es: JSX.Element,
  LinkToProject: string,
  LinkToWeb: string,
  Tags: { en: string[], es: string[] }
}

export interface ProjectsI { [key: string]: Project }

const Projects: ProjectsI = {
  URLShortener: {
    Title: (
      <h1>AlxmrURLShortener</h1>
    ),
    en: (
      <span>
        <p>This project was made in march 2024. It is a web app that shortens URLs. It was developed using React/Typescript for the client app and Java (Spring Boot) with PostgreSQL and deployed in Heroku using a custom domain.</p>
        <br />
        <ul className="list-disc list-inside">
          <li>It has a simple interface where you can paste the URL you want to shorten and it will generate a new URL.</li>
          <br />
          <li>It is plan to have a statistics page where you can see the number of times the shortened URL has been visited.</li>
          <br />
          <li>The app still in development and also is planned to have a CLI app for linux distros.</li>
        </ul>
      </span>
    ),
    es: (
      <span>
        <p>Este proyecto fue realizado en marzo de 2024. Es una aplicación web que acorta URLs. Fue desarrollado utilizando React/Typescript para la aplicación cliente y Java (Spring Boot) con PostgreSQL y desplegado en Heroku utilizando un dominio personalizado.</p>
        <br />
        <ul className="list-disc list-inside">
          <li>Tiene una interfaz simple donde puedes pegar la URL que deseas acortar y generará una nueva URL.</li>
          <br />
          <li>Se planea tener una página de estadísticas donde puedas ver el número de veces que se ha visitado la URL acortada.</li>
          <br />
          <li> La aplicación aun sigue en desarrollo, también esta planeado tener una CLI app especificamente para Linux.</li>
        </ul>
      </span>
    ),
    LinkToProject: "https://github.com/alexismrosales/url_shortener",
    LinkToWeb: "https://alxmr.tech",
    Tags: {
      en: ["Spring Boot", "PostgreSQL", "React", "Typescript", "Personal Project"],
      es: ["Spring Boot", "PostgreSQL", "React", "Typescript", "Proyecto Personal"]
    }
  },
  LoveAnalysis: {
    Title: (
      <h1>LoveAnalysis</h1>
    ),
    en:
      <span>
        <p>I made this app for valentine's day (2024) for my girlfriend. It is a web app that made an small data analysis using an API which analyzes our whatsapp messages.</p>
        <ul className="list-disc list-inside">
          <br />
          <li>The API was developed with python analyzing more than 40,000 whatsapp messages from our conversation, mainly using Pandas (for the analysis) and Flask (for the server).</li>
          <br />
          <li>Using React and Tailwind, the website was sectioned in different parts which shows different data I thought was interesting from our whatsapp conversation.</li>
        </ul>
        <b>Note: If the webpage does not show the data, just wait a moment. I am using a free webserver.</b>
      </span>
    ,
    es:
      <span>
        <p>Hice esta aplicación para el día de San Valentín (2024) para mi novia. Es una aplicación web que realiza un pequeño análisis de datos utilizando una API que analiza nuestros mensajes de WhatsApp.</p>
        <ul className="list-disc list-inside">
          <br />
          <li>La API fue desarrollada con python analizando más de 40,000 mensajes de whatsapp de nuestra conversación, principalmente usando Pandas (para el análisis) y Flask (para el servidor).</li>
          <br />
          <li>Usando React y Tailwind, el sitio web se dividió en diferentes partes que muestran diferentes datos que me parecieron interesantes de nuestra conversación de WhatsApp.</li>
        </ul>
      </span>
    ,
    LinkToProject: "https://github.com/alexismrosales/love_analysis_web_app/",
    LinkToWeb: "https://alexismrosales.github.io/love_analysis_web_app/",
    Tags: {
      en: ["React", "Tailwind", "Python", "Pandas", "Personal Project"],
      es: ["React", "Tailwind", "Python", "Pandas", "Proyecto Personal"]
    }
  },
  Interprex: {
    Title: (
      <h1>Interprex</h1>
    ),
    en:
      <span>
        <p>This project was made in Java at mid-2023 in collaboration of my partner Aranza for my compilers course. It is an interpreter were you can program different structures like loops, conditionals and solve arithmetic operations.</p>
        <br />
        <ul className="list-disc list-inside">
          <li>The code is evaluated with three different stages.
            <ul className="list-disc list-inside">
              <li>Scanner: it verify if the lexic of the code is valid.</li>
              <li>Parser: sintaxis is verified and save all the elements in a stack.</li>
              <li>Semantic analyzer: it converts the stack on a AST, while traversing the tree solving all assigned operations.</li>
            </ul>
          </li>
          <br />
          <li>Every stage were solved using differents algorithms of computational theory and compilers.</li>
        </ul>
      </span>
    ,
    es:
      <span>
        <p>Este proyecto fue realizado en Java a mediados de 2023 en colaboración de mi compañera Aranza para mi curso de compiladores. Es un intérprete donde puedes programar diferentes estructuras como bucles, condicionales y resolver operaciones aritméticas.</p>
        <br />
        <ul className="list-disc list-inside">
          <li>El código se evalúa con tres etapas diferentes.
            <ul className="list-decimal list-inside">
              <li>Escáner: verifica si el léxico del código es válido.</li>
              <li>Analizador sintáctico: se verifica la sintaxis y se guardan todos los elementos en una pila.</li>
              <li>Análisis semántico: convierte la pila en un AST, mientras recorre el árbol resolviendo todas las operaciones asignadas.</li>
            </ul>
          </li>
          <br />
          <li>Cada etapa se resolvió utilizando diferentes algoritmos de teoría computacional y compiladores.</li>
        </ul>
      </span>
    ,
    LinkToProject: "https://github.com/alexismrosales/interpretex",
    LinkToWeb: "",
    Tags: {
      en: ["Java", "Computer Theory", "Algorithms", "OOP"],
      es: ["Java", "Teoría de la Computación", "Algoritmos", "POO"]
    }
  },
  RegisterForStudents: {
    Title: (
      <h1>RegisterForStudents</h1>
    ),
    en: (
      <span>
        <p>This web app was a school project created at the end of 2022. Developed with the LAMP stack (Linux, ApacheServer, MySQL and PHP), Javascript using DOM.</p>
        <br />
        <ul className="list-disc list-inside">
          <li>Two roles were created, one for the students and the other for the administrators.</li>
          <br />
          <li>The app allows students create  a new register and assigning them a schedule depending of the avalibity of the classrooms and hours, once you are registered a pdf with the date will be avalible to download.</li>
          <br />
          <li>If you are an admin you have all permisions to modify data from any student including the schedule.</li>
        </ul>
      </span>
    ),
    es: (
      <span>
        <p>Esta aplicación web fue un proyecto escolar creado a finales de 2022. Desarrollado con el stack LAMP (Linux, ApacheServer, MySQL y PHP), Javascript utilizando DOM.</p>
        <br />
        <ul className="list-disc list-inside">
          <li>Se crearon dos roles, uno para los estudiantes y otro para los administradores.</li>
          <br />
          <li>La aplicación permite a los estudiantes crear un nuevo registro y asignarles un horario dependiendo de la disponibilidad de las aulas y las horas, una vez que esté registrado, un pdf con la fecha estará disponible para descargar.</li>
          <br />
          <li>Si eres un administrador, tienes todos los permisos para modificar los datos de cualquier estudiante, incluido el horario.</li>
        </ul>
      </span>
    ),
    LinkToProject: "https://github.com/alexismrosales/escom_web_app",
    LinkToWeb: "",
    Tags: {
      en: ["PHP", "MySQL", "PHP", "Bootstrap", "Linux Server"],
      es: ["PHP", "MySQL", "PHP", "Bootstrap", "Linux Server"]
    }
  },
  SomeCodes: {
    Title: (
      <h1>SomeCodes</h1>
    ),
    en: (
      <span>
        <p>
          I've been solving different coding problems and here's a repository with all my solutions.
          <br /><br />
          I always try to approach the problem avoiding brute force to get best time and space complexity. The repository is constantly updated.
          <br /><br />
          Most of my solution were made in C++ for convenience.
        </p>
      </span>
    ),
    es: (
      <span>
        <p>
          He estado resolviendo diferentes problemas de programción y aquí hay un repositorio con todas mis soluciones.
          <br /><br />
          Siempre intento abordar el problema evitando la fuerza bruta para obtener la mejor complejidad de tiempo y espacio. El repositorio se actualiza constantemente.
          <br /><br />
          La mayoría de mis soluciones se hicieron en C++ por conveniencia.
        </p>
      </span>
    ),
    LinkToProject: "https://github.com/alexismrosales/cpp",
    LinkToWeb: "",
    Tags: {
      en: ["Competitive Programming", "C++", "Python", "Algorithms"],
      es: ["Programación Competitiva", "C++", "Python", "Algoritmos"],
    }
  }
}
export default Projects;
