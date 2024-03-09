import { useTranslation } from "react-i18next";

const Home = () => {
    const [data, setData] = useTranslation("global");
    return (
    <section>
        <h1>Home</h1>
        <p>{data("aboutMe")}</p>
    </section>
    );
}
export default Home;