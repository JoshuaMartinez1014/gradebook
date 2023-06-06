/* import { UserContext } from "./ctx/UserContext"; */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, SignupPage, GradePage } from "./pages";
import { Header, Footer } from "./components";
import "./styles/global.css";

function App() {
  return (
    <>
      <Router>
        <div id="page-container">
          <Header />
          <div id="content-wrap">
            <Routes>
              <Route path="/" exact element={<HomePage />} />
              <Route path="/login" exact element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/grades" element={<GradePage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
