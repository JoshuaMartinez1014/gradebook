import placeholder from "../img/placeholder.png";

const HomePage = () => {
  return (
    <>
      <div style={{ textAlign: "center", fontSize: "4rem" }}>
        Welcome to GradeBook
      </div>
      <img
        src={placeholder}
        alt="pencil wearing a top hat with the caption under construction"
        style={{ height: "600px", display: "block", margin: "auto" }}
      />
    </>
  );
};

export default HomePage;
