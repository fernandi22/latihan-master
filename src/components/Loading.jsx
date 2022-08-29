const Loading = () => {
  return (
    <div className="d-flex justify-content-center m-5">
      <div
        className="spinner-border spinner-border-xxl text-dark"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;