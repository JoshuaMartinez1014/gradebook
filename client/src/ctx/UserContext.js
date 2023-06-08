import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useLocation } from "react-router-dom";

const UserContext = createContext({});
export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  //.... define our state variables...
  const [currUser, setCurrUser] = useState(null);
  const location = useLocation();

  const verifyUser = async () => {
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
        }
      } catch (err) {
        console.log(err.message);
        if (!window.location.href.includes("/login")) {
          window.location.href = "/login";
        }
      }
    } else {
      console.log("no cookie found");
      if (!window.location.href.includes("/login")) {
        window.location.href = "/login";
      }
    }
  };

  const logout = () => {
    Cookies.remove("auth-cookie");
    window.location.href = "/login";
  };

  useEffect(() => {
    console.log("context use effect working");
    verifyUser();
  }, [location.pathname]);

  return (
    <UserContext.Provider value={{ currUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};
