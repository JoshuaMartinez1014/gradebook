/* import { UserContext } from "./ctx/UserContext"; */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, SignupPage, GradePage } from "./pages";
import { Header, Footer, SideNav } from "./components";
import "./styles/global.css";

function App() {
  return (
    <>
      <div id="page-container">
        <Router>
          <Header />
          <div id="page-content">
            <SideNav />{" "}
            <div style={{ display: "flex", justifyContent: "center", flex: 1 }}>
              <Routes>
                <Route path="/" exact element={<HomePage />} />
                <Route path="/login" exact element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/grades" element={<GradePage />} />
              </Routes>{" "}
            </div>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;

/* For footer include: <div id="content-wrap"> around the <Routes> */
