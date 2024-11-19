import { BrowserRouter, Routes, Route } from "react-router-dom";

import useWindowSize from "./components/_scripts/resolution";
import Sidebar from './components/sidebar'
import ListGroup from "./components/listgroup";
import PageBuilderWrapper from "./components/pagebuilder"

function App() {
    const { width } = useWindowSize();
    const isMobile = width < 768; // tailwind sm size
    return (
        <div className="App md:flex md:w-full">
            <BrowserRouter>
                <Sidebar />
                <main id="main">
                    <Routes>
                        {!isMobile && <Route path="/" element={<ListGroup type="Project" />} />}
                        <Route path="/Projects/" element={<ListGroup type="Project" />} />
                        <Route path="/Programs/" element={<ListGroup type="Program" />} />
                        <Route path="/:type/:name" element={<PageBuilderWrapper />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </div >
    );
}
export default App;
