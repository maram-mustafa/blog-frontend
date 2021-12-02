import React, {useEffect, useState} from 'react';
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
        e.preventDefault()
        const isValid = formValidation();
        if (isValid === false) {
            e.preventDefault()
            return;
        }

        const validImage = imageValidation();
        console.log(imageErr)
        if (validImage === false) {
            // e.preventDefault()
            return;
        }


        try {
            const res = await axios.post(`http://localhost:5000/add`, {
                posted_by, title, body, image
            })
            e.preventDefault()
            setArticles(prev => [res.data, ...prev]);
        } catch (e) {
            console.log(e)
        }
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
            bodyErr.bodyErrShort = "Add more description please!!";
            isValid = false
        }

        setPosted_byErr(posted_byErr)
        setBodyErr(bodyErr)
        return isValid;
    }

    const imageValidation = () => {
        // const imageErr = ""
        let validImage = true;

        // const fileName = image;
        const fileExtension = image.split('.').pop();


        if (fileExtension !== 'png') {
            console.log(fileExtension)
            setImageErr("just .png extension is valid");
            validImage = false
        }
        setImageErr(imageErr)
        return validImage;
    }

    useEffect(() => {
        console.log(imageErr)
    }, [imageErr])

    return (<div className="container mt-5 mb-5">
        <h3 className="headerEdit mb-3"> keep it sweet desserts!!!</h3>
        <Form onSubmit={add_post} className="formEdit">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="editInputText"></Form.Label>
                <Form.Control
                    onChange={(even) => setPosted_by(even.target.value)}
                    type="text"
                    placeholder="Post By"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="editInputText"></Form.Label>
                <Form.Control
                    className="transparent-input"
                    onChange={(even) => setTitle(even.target.value)}
                    type="text"
                    placeholder="Dessert Name"
                />
            </Form.Group>
            {Object.keys(posted_byErr).map((key) => {
                return <div style={{color: "red"}}>{posted_byErr[key]} </div>
            })}
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="editInputText"></Form.Label>
                <Form.Control
                    onChange={(even) => setBody(even.target.value)}
                    type="text"
                    placeholder="Description"
                />
            </Form.Group>
            {Object.keys(bodyErr).map((key) => {
                return <div style={{color: "red"}}>{bodyErr[key]} </div>
            })}
            <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label className="editInputText"></Form.Label>
                <Form.Control
                    onChange={(even) => setImage(even.target.value)}
                    type="text"
                    placeholder="Show Us"
                />
            </Form.Group>
            {/*{Object.keys(imageErr).map((key) => {*/}
            {/*    return <div style={{color: "red"}}>{imageErr[key]} </div>*/}
            {/*})}*/}
            {imageErr && (
                <div style={{color: "red"}}>{imageErr}</div>
            )}
            <button variant="primary" type="submit" className="subminBtn">
                Submit
            </button>
        </Form>
    </div>);
}


export default CreatePosts;