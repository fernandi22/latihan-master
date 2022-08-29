import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import NoMatchError from "./NoMatch";

const Search = (props) => {
  const isLoading = props.list.length === 0;

  return (
    <>
      <div className="container mt-3">
        {isLoading ? (
          <Loading />
        ) : (
          props.list.Search && (
            <div className="fs-3 fw-bold">
              <p>SHOW YOUR FAVORITE MOVIES</p>
            </div>
          )
        )}
        <div className="row row-cols-4">
          {props.list.Error ? (
            <NoMatchError error={props.list.Error} />
          ) : (
            props.list.Search &&
            props.list.Search.map((imdb, index) => (
              <>
                <div key={index} className="col-lg-3 align-items-stretch pb-4">
                  <div className="card">
                    <img
                      src={imdb.Poster}
                      className="card-img-top"
                      alt={imdb.Title}
                    />
                    <div className="card-body bg-dark text-center">
                      <Link
                        to={`/about?id=${imdb.imdbID}`}
                        className="card-link text-light"
                      >
                        {imdb.Title}
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
