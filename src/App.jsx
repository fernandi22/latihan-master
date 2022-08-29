import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Search from "./pages/Search";
import NoMatchError from "./pages/NoMatch";
import { useState } from "react";
import { useSearchParams, Route, Routes} from "react-router-dom";

function App() {
  const title = useState("FinProH8");
  const [list, setList] = useState([]);
  const [searchParams ] = useSearchParams();

  let component;

  if (window.location.pathname.includes("about")) {
    component = <About imdbID={searchParams.get("id")} />;
  }
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="header bg-warning">
        <NavBar handleMovieCollection={setList} title={title} />
      </div>
      
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/search" element={<Search list={list} />} />
        <Route path="/about" element={component} />
        <Route path="*" element={<NoMatchError />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
