/* import { UserContext } from "./ctx/UserContext"; */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, SignupPage, GradePage, Calendar } from "./pages";
import { Header, Footer, SideNav } from "./components";
import "./styles/global.css";

function App() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/signup") {
      console.log("this route is hit");
    }
  }, [location]);

  return (
    <>
      <div id="page-container">
        <Router>
          <Header />
          <div id="page-main">
            <SideNav />{" "}
            <div id="page-content" style={{}}>
              <Routes>
                <Route path="/" exact element={<HomePage />} />
                <Route path="/login" exact element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/grades" element={<GradePage />} />
                <Route path="/calendar" element={<Calendar />} />
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
