/* import { UserContext } from "./ctx/UserContext"; */
import { useEffect } from "react";
import { UserProvider } from "./ctx/UserContext";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import { HomePage, LoginPage, SignupPage, GradePage, Calendar } from "./pages";
import { Header, Footer, SideNav } from "./components";
import "./styles/global.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <div id="page-container">
            <Header />
            <div id="page-main">
              <SideNav />{" "}
              <div id="page-content" style={{}}>
                <Routes>
                  <Route path="/" exact element={<HomePage />} />
                  <Route path="/login" exact element={<LoginPage />} />
                  <Route path="/signup" element={<SignupPage />} />
                  <Route path="/grades" element={<GradePage />} />
                  <Route path="/link1" element={<GradePage />} />
                  <Route path="/calendar" element={<Calendar />} />
                </Routes>{" "}
              </div>
            </div>
          </div>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

/* For footer include: <div id="content-wrap"> around the <Routes> */
