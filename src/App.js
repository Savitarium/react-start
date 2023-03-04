import Container from './components/Container/Container.js';
import NavBar from "./components/NavBar/NavBar";
import Home from './components/Home/Home'
import Favorite from "./components/Favorite/Favorite";
import About from './components/About/About';
import {Route, Routes} from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import List from "./components/List/List";

const App = () => {
    return (
        <div>
            <NavBar />
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/favorite" element={<Favorite />} />
                    <Route path="/list/:listId" element={<List />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Container>
        </div>
    );
};
export default App;
