import { Link } from "react-router-dom";

const NoMatchError = (props) => {
  return (
    <>
      <div className="container text-center mt-3">
        <h2>Nothing to see here!</h2>
        <h2>{props.error}</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    </>
  );
};

export default NoMatchError;
