import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import axios from "axios";
import './CreatePosts.css';

const CreatePosts = ({setArticles, articles}) => {

    const [posted_by, setPosted_by] = useState()
    const [title, setTitle] = useState()
    const [body, setBody] = useState()
    const [image, setImage] = useState()


    const add_post = async () => {
        const res = await axios.post(`http://localhost:5000/add`, {
            posted_by,
            title,
            body,
            image
        })
        setArticles(...articles, res.data);
    }
    return (
        <div className="container mt-5 mb-5">
            <h3 className="headerEdit mb-5" > keep it sweet desserts!!!</h3>
            <Form onSubmit={add_post} className="formEdit">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        onChange={(even) => setTitle(even.target.value)}
                        type="text"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                        onChange={(even) => setPosted_by(even.target.value)}
                        type="text"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Body</Form.Label>
                    <Form.Control
                        onChange={(even) => setBody(even.target.value)}
                        type="text"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        onChange={(even) => setImage(even.target.value)}
                        type="text"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default CreatePosts;