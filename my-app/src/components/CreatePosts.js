import React, {useState} from 'react';
import {Alert, Button, Form, Image} from "react-bootstrap";
import axios from "axios";
import './CreatePosts.css';

const CreatePosts = ({setArticles, articles}) => {

    const [posted_by, setPosted_by] = useState()
    const [title, setTitle] = useState()
    const [body, setBody] = useState()
    const [image, setImage] = useState()

    const [posted_byErr, setPosted_byErr] = useState({})
    const [titleErr, setTitleErr] = useState({})
    const [bodyErr, setBodyErr] = useState({})
    const [imageErr, setImageErr] = useState("")


    const add_post = async (e) => {
        const isValid = formValidation();
        if (isValid === false) {
            e.preventDefault()
            return;
        }

        const validImage = imageValidation();
        if (validImage === false) {
            e.preventDefault()
            return;
        }

        const res = await axios.post(`http://localhost:5000/add`, {
            posted_by,
            title,
            body,
            image
        })
        setArticles(...articles, res.data);
    }

    const imageValidation = () => {
        const image = ""
        let validImage = true;


        const fileName = "myDocument.pdf";
        const fileExtension = fileName.split('.').pop(); //"pdf"

        if (fileExtension != 'png') {
            imageErr.impErrExt = "just .png extension is valid";
            validImage = false
        }

        setImageErr(imageErr)
        return validImage;


    }


    const formValidation = () => {
        const posted_byErr = {};
        const bodyErr = {};

        let isValid = true;

        if (posted_by.trim().length < 5) {
            posted_byErr.posted_byShort = "too short!! it should be more than 5 character";
            isValid = false
        }

        if (body.trim().length < 100) {
            bodyErr.bodyErrShort = "Add more description please";
            isValid = false
        }

        setPosted_byErr(posted_byErr)
        setBodyErr(bodyErr)
        return isValid;
    }


    return (
        <div className="container mt-5 mb-5">
            <h3 className="headerEdit mb-5"> keep it sweet desserts!!!</h3>
            <Form onSubmit={add_post} className="formEdit">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="editInputText">Dessert Name</Form.Label>
                    <Form.Control
                        className="transparent-input"
                        onChange={(even) => setTitle(even.target.value)}
                        type="text"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="editInputText">Post By</Form.Label>
                    <Form.Control
                        onChange={(even) => setPosted_by(even.target.value)}
                        type="text"/>
                </Form.Group>
                {Object.keys(posted_byErr).map((key) => {
                    return <div style={{color: "red"}}>{posted_byErr[key]} </div>
                })}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="editInputText">Description</Form.Label>
                    <Form.Control
                        onChange={(even) => setBody(even.target.value)}
                        type="text"/>
                </Form.Group>
                {Object.keys(bodyErr).map((key) => {
                    return <div style={{color: "red"}}>{bodyErr[key]} </div>
                })}
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label className="editInputText">Show US</Form.Label>
                    <Form.Control
                        onChange={(even) => setImage(even.target.value)}
                        type="text"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
        ;
};

export default CreatePosts;