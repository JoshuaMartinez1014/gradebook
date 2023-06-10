import React from "react";
import { useUserContext } from "../ctx/UserContext";
import { useState, useEffect } from "react";
import "../styles/global.css";
import { Button, Form } from "react-bootstrap";

function UserPage() {
    const { currUser } = useUserContext();
    console.log(currUser);


    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: ""
    });
    const [userData, setUserData] = useState();

    async function lookupUser() {
        const apiPath = `/api/user/${currUser._id}`
        const searchQuery = await fetch(apiPath)
        const results = await searchQuery.json()
        console.log(results)
        setUserData(results)
        setFormData(results)
    }

    useEffect(() => {
        console.log("context use effect working");
        if (currUser && currUser._id) {
            lookupUser();
        }
    }, [currUser]);

    function handleChange(e) {
        if (e.target.name === "role") {
            setFormData({
                ...formData,
                isTeacher: e.target.value === "teacher",
            });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    }
    function handleSubmit(e) {
        e.preventDefault();

        fetch(`api/user/${currUser._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                window.location.href = "/user";
            });
    }
    return (
        <>

            <div className="d-flex flex-column container">
                <h1>hello, {formData.fname} {formData.lname}</h1>
                <Form
                    className="mt-3"
                    onSubmit={handleSubmit}
                >
                    <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="fname"
                            value={formData.fname}
                            onChange={handleChange}
                            placeholder="Enter your first name"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="lname"
                            onChange={handleChange}
                            value={formData.lname}
                            placeholder="Enter your last name"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={formData.email}
                            placeholder="Enter your email"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            onChange={handleChange}
                            placeholder="Enter your Password"
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}


export default UserPage;