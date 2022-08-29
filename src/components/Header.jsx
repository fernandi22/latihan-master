const Header = (props) => {
  return (
    <>
      <div style={styles.container}>
        <h1>{props.title}</h1>
      </div>
    </>
  );
};

export default Header;

const styles = {
  container: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "flex-start",
    padding: 2,
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
