import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { generatePath, useNavigate } from "react-router-dom";

const NavBar = (props) => {
  const [counter, setCounter] = useState(0);
  const [namaFilm, setNamaFilm] = useState([]);
  const [flag, setFlag] = useState();
  const navigate = useNavigate();
  const searchInput = useRef(null);
  
  function doSearch(e) {
    e.preventDefault();

    navigate(generatePath(`:url?s=:queryString`, {
      url: "/search",
      queryString: `${searchInput.current.value}`
    }));

    setNamaFilm(searchInput.current.value);
    setFlag(1);
  }

  const getData = async () => {
    await axios.get(
      `https://www.omdbapi.com/?apikey=a28eba38&s=${namaFilm}`
    )
    .then(({ data }) => {
      props.handleMovieCollection(data);
    },({ error }) => {
      props.handleMovieCollection(error);
    });
  };

  useEffect(() => {
    if (flag === 1) {
      props.handleMovieCollection([]);
      setFlag(0);
      getData();
    }
  }, [flag]);

  const incrementCount = () => {
    // Update state with incremented value
    setCounter(counter + 1);
  };

  return (
    <div className="header bg-warning">
      <div className="container">
        <nav className="navbar navbar-light">
            <a href="/" className="navbar-brand fw-bold fs-4">{props.title}</a>
            <form className="d-flex" role="search" onSubmit={doSearch}>
              <input
                className="form-control me-2 input-textbox"
                type="text"
                id="judul"
                placeholder="Search..."
                aria-label="Search"
                ref={searchInput}
                required
              />
              <button className="button btn btn-dark">
                Search
              </button>
            </form>
        </nav>
      </div>
    </div>
  )
}

export default NavBar;