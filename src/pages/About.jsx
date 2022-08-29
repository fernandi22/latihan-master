import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "../components/Loading";

const About = (props) => {
  const [list, setList] = useState();
  const [loading, setLoading] = useState(true);
  
  const getData = async () => {
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=a28eba38&i=${props.imdbID}`
    );
    setList(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  },[]);

  return (
    <>
      {
      loading ? <Loading /> :
      list && (
        <>
          <div className="container mt-3">
            <h1>Detail Movie</h1>
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4 text-center">
                  <img src={list.Poster} className="img-fluid rounded-start" alt="" />
                </div>
                <div className="col-md-8">
                  <div className="card-body mr-4">
                    <h5 className="card-title fs-2 fw-bold">{list.Title}</h5>
                    <ul key={list.id} className="list-group">
                      <li className="fs-3">Year  : {list.Year}</li>
                      <li className="fs-3">Rated : {list.Rated}</li>
                      <li className="fs-3">Released  : {list.Released}</li>
                      <li className="fs-3">Genre : {list.Genre}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default About;
