import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UserContext = createContext({});
export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  //.... define our state variables...
  const [currUser, setCurrUser] = useState(null);
  const [logoutAlert, setLogoutAlert] = useState(null);
  const [loginAlert, setLoginAlert] = useState("working");
  const [loading, setloading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const verifyUser = async () => {
    setloading(true);
    if (Cookies.get("auth-cookie")) {
      try {
        const query = await fetch("/api/user/verify", {
          method: "post",
          body: JSON.stringify({}),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await query.json();
        console.log(result);
        if (result && result.status === "success") {
          setCurrUser(result.payload);
          Cookies.set("user-data", JSON.stringify(result.payload));
        }
      } catch (err) {
        console.log(err.message);
        if (
          !window.location.pathname.includes("/login") &&
          !window.location.pathname.includes("/signup")
        ) {
          console.log("sending to login page");
          navigate("/login");
          setLoginAlert(true);
          setCurrUser(null);
        }
      }
    } else {
      console.log("no cookie found");
      if (
        !window.location.pathname.includes("/login") &&
        !window.location.pathname.includes("/signup")
      ) {
        navigate("/login");
        setLoginAlert(true);
        setCurrUser(null);
      }
    }
    setloading(false);
  };

  const logout = () => {
    Cookies.remove("auth-cookie");
    Cookies.remove("user-data");
    setCurrUser(null);
    navigate("/login");
    setLogoutAlert("Successfully Logged-Out");
    setLoginAlert(null);
  };

  useEffect(() => {
    console.log("context use effect working");
    const userData = Cookies.get("user-data");
    if (userData) {
      setCurrUser(JSON.parse(userData));
    }
    verifyUser();
  }, [location.pathname]);

  return (
    <UserContext.Provider
      value={{
        currUser,
        loading,
        logout,
        logoutAlert,
        loginAlert,
        setLoginAlert,
        setLogoutAlert,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
