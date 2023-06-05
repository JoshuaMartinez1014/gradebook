/* import { UserContext } from "./ctx/UserContext"; */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { HomePage } from "./pages";
import "./styles/global.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="App">Learn React</div>;
        <Routes>
          <Route path="/" exact element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
