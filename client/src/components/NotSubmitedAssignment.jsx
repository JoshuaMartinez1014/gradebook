import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";

function SubmitedAssignment(props){
    const [search, setSearch]= useState("")
    async function lookupMovie(e){
        e?.preventDefault()
        const apiPath = `/submit`
        const searchQuery= await fetch(apiPath)
        const results= await searchQuery.json()
      }
    //   const submitAssignment = async () => {
    //       try {
    //         const query = await fetch("/api/submit", {
    //           method: "post",
    //           body: JSON.stringify({}),
    //           headers: {
    //             "Content-Type": "application/json",
    //           },
    //         });
    //         const result = await query.json();
    //         console.log(result);
    //         if (result && result.status === "success") {
    //           setCurrUser(result.payload);
    //         }
    //       } catch (err) {
    //         console.log(err.message);
    //         if (!window.location.pathname.includes("/login")) {
    //           navigate("/login");
    //         }
    //       }
    //   };
    return(
        <>
            <h2>{props.data}</h2>
            <p>turn it in</p>
            <Form style={{border: "1px solid #333"}}>
          <Form.Label>Type in the link to your homework</Form.Label>  
          <Form.Control type="text" name="search" value={search} onChange={(e)=> setSearch(e.target.value)}/>
          <Button variant="primary" 
        //   onClick={submitAssignment}
          >submit the assignment!</Button>
        </Form>
        </>
    )
}

export default SubmitedAssignment