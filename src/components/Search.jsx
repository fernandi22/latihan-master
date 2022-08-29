import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Table from "react-bootstrap/Table";

const Search = (props) => {
  console.log(props.title);
  const [list, setList] = useState([]);
  const [counter, setCounter] = useState(0);
  const [namaFilm, setNamaFilm] = useState();
  const [flag, setFlag] = useState(0);

  function doSearch() {
    setNamaFilm(document.getElementById("judul").value);
    setFlag(1);
  }

  useEffect(() => {
    if (flag === 1) {
      setList([]);
      getData();
      setFlag(0);
    }
  }, [flag]);

  const getData = async () => {
    console.log(props.judul, "========== judul ============");
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=a28eba38&s=${namaFilm}`
    );
    setList(res.data.Search);
  };

  const incrementCount = () => {
    // Update state with incremented value
    setCounter(counter + 1);
  };

  return (
    <>
      <div style={styles.container}>
        {/* <div>
          <Header title={props.title} />
        </div> */}
        <div style={styles.row}>
          <input placeholder="Search Movie" type="text" id="judul" />
          <button onClick={doSearch}>Search</button>
        </div>
        <Table>
          <tbody>
            {list.length > 0 &&
              list.map((imdb, index) => (
                <tr>
                  <td>
                    <img
                      src={imdb.Poster}
                      style={{ height: "15%", width: "15%" }}
                    />
                    {imdb.Title}
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Search;

const styles = {
  container: {
    margin: 0,
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  col: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
};
