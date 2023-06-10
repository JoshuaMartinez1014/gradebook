import React from "react";
// import { useUserContext } from "../ctx/UserContext";
import { useState, useEffect } from "react";
import "../styles/global.css";

function UserPage() {
    // const { currUser } = useUserContext();
    // console.log(currUser);

    const [userData, setUserData] = useState();

    // async function lookupUser() {
    //     const apiPath = `/api/user/${currUser._id}`
    //     const searchQuery = await fetch(apiPath)
    //     const results = await searchQuery.json()
    //     console.log(results)
    //     setUserData(results)
    // }

    // useEffect(() => {
    //     console.log("context use effect working");
    //     if( currUser && currUser._id ){
    //       lookupUser();
    //     }
    // }, [currUser]);

    return(
        <>
            <h1>hello</h1>
        </>
    )
}


export default UserPage;