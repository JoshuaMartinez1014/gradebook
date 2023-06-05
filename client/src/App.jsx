/* import { UserContext } from "./ctx/UserContext"; */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages";
import { Header } from "./components";
import { Footer } from "./components";
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
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
