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
          opacity: ".95",
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
              border: "16px solid white",
              padding: "20px",
              backgroundColor: "rgba(128, 128, 128, 0.2)",
              borderRadius: "20px",
              opacity: ".95",
            }}
          >
            Welcome <br />
            to <br />
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
