import placeholder from "../img/placeholder.png";
import { useUserContext } from "../ctx/UserContext";

const HomePage = () => {
  const { currUser } = useUserContext();
  console.log(currUser);
  return (
    <>
      {/* <h1>{currUser.fname}</h1> */}
      <h1></h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center", fontSize: "4rem" }}>
          Welcome to GradeBook
        </div>
        <img
          src={placeholder}
          alt="pencil wearing a top hat with the caption under construction"
          style={{ height: "600px", display: "block", margin: "auto" }}
        />
      </div>
    </>
  );
};

export default HomePage;
