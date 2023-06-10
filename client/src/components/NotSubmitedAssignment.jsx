import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import { useUserContext } from "../ctx/UserContext";

function SubmitedAssignment(props) {
    const { currUser } = useUserContext();
    const [search, setSearch] = useState("")
    const [submitedWork, setSubmitedWork] = useState("")

    const submitAssignment = async () => {

        try {
            console.log(submitedWork)
            const query = await fetch("/api/submited", {
                method: "post",
                body: JSON.stringify(submitedWork),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const result = await query.json();
            console.log(result);
            if (result && result.status === "success") {
                console.log("set")
                props.setPosted(true);
            }
        } catch (err) {
            console.log(err.message);
        }
    };
    return (
        <>
            <h2>{props.data[0]}</h2>
            <p>turn it in</p>
            <Form style={{ border: "1px solid #333" }}>
                <Form.Label>Type in the link to your homework</Form.Label>
                <Form.Control type="text" name="search" value={search} onChange={(e) =>{
                    setSearch(e.target.value)
                    setSubmitedWork({ submited: e.target.value, student: currUser._id, assignment:props.data[1]})
                }}
                      />
                <Button variant="primary" onClick={submitAssignment}>submit the assignment!</Button>
            </Form>
        </>
    )
}

export default SubmitedAssignment