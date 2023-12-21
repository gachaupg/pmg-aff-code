import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
// import PrimarySearchAppBar from "./components/Navbar";
import { BrowserRouter, Routes,  Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import PrimarySearchAppBar  from './components/Navbar'
import About from "./pages/About";
import Register from "./pages/Register";
import Events from "./pages/Events";

function App() {
  return (
    <>
      <BrowserRouter>
        {" "}
        <PrimarySearchAppBar />

        <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/events" element={<Events/>} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
