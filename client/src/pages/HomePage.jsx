import placeholder from "../img/placeholder.png";
import study from "../img/welcome-study.jpg";
import { useUserContext } from "../ctx/UserContext";

const HomePage = () => {
  const { currUser } = useUserContext();
  console.log(currUser);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${study})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: ".93",
          width: "100%",
          height: "100vh",
          zIndex: "0",
        }}
      >
        {" "}
        <div>
          <div
            style={{
              textAlign: "center",
              fontSize: "4rem",
              marginTop: "20px",
              color: "white",
              border: "12px solid white",
              padding: "20px",
              backgroundColor: "#212529",
              borderRadius: "20px",
              boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
            }}
          >
            Welcome to <br />
            GradeBook
          </div>
        </div>
        {/*  <img
          src={study}
          alt="pencil wearing a top hat with the caption under construction"
          style={{
            height: "600px",
            display: "block",
            margin: "auto",
            borderRadius: "20px",
            opacity: ".8",
          }}
        /> */}
      </div>
    </>
  );
};

export default HomePage;
