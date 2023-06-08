import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";


const UserContext = createContext({});
export const useUserContext = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
    //.... define our state variables...
    const [ currUser, setCurrUser ] = useState(null)

    const verifyUser = async() => {
        if( Cookies.get("auth-cookie") ){
          try {
            const query = await fetch("/api/user/verify", {
              method: "post",
              body: JSON.stringify({}),
              headers: {
                "Content-Type": "application/json"
              }
            })
            const result = await query.json()
            if( result && result.status === "success" ){
              setCurrUser(result.payload)
            }
          } catch(err){
            if( !window.location.href.includes("/login") ){
              window.location.href = "/login"
            }
          }
        }
      }

      const logout = () => {
        Cookies.remove("auth-cookie");
        window.location.href = "/login"
      }
    
      useEffect(() => {
        console.log("verifying user")
        verifyUser()
      }, [window.location.href])



    return (
        <UserContext.Provider value={{ currUser, logout }}>
            { children }
        </UserContext.Provider>
    )
}