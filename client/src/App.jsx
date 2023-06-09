/* import { UserContext } from "./ctx/UserContext"; */
import { useEffect } from "react";
import { UserProvider } from "./ctx/UserContext";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import {
  HomePage,
  LoginPage,
  SignupPage,
  GradePage,
  Calendar,
  SyllabusPage,
  TeacherPage,
  AssignmentsPage,
  AssignmentPage,
} from "./pages";
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
                  <Route path="/login" exact element={<HomePage />} />
                  <Route path="/" exact element={<LoginPage />} />
                  <Route path="/signup" element={<SignupPage />} />
                  <Route path="/grades" element={<GradePage />} />
                  <Route path="/syllabus" element={<SyllabusPage />} />
                  <Route path="/teacher" element={<TeacherPage />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/assignments" element={<AssignmentsPage />} />
                  <Route path="/assignment/:id" element={<AssignmentPage />} />
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
