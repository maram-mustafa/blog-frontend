import React, {useState} from 'react';
import './Article.css';
import {Form, Button, Card, Row, Col} from "react-bootstrap";
import axios from "axios";

//(article) == props.article
function Article({article, setArticles}) {
    const [toggleEdit, setToggleEdit] = useState(false)
    const [newData, setNewData] = useState({
        posted_by: article.posted_by,
        title: article.title,
        body: article.body,
        image: article.image,
    })




    const onChangeHandler = (e) => {
        setNewData({...newData, [e.target.name]: e.target.value})
        console.log(newData)
    }

    const onDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/delete/${article.id}`);
            setArticles(potato => potato.filter(p => p.id !== id));
        } catch (e) {
            console.log(e)
        }
    }

    const UpdateArticle = async (e) => {
        e.preventDefault()
        try {
            // const res = await axios.put(`http://localhost:5000/update/${article.id}`, newData)
            // console.log(res.data)
            axios.put(`http://localhost:5000/update/${article.id}`, newData)
                .then(res => console.log(res.data))
                .catch(e => console.log(e))
        } catch (e) {
            console.log(e)
        }
        setToggleEdit(false)


    }


    return (
        <div key={article.id}>
            <form onSubmit={UpdateArticle}>
                <p> {article.date}</p>
                <label>
                    <img src={article.image}/>
                    <input className="float-start" type="text" name="image" defaultValue={article.image}
                           disabled={!toggleEdit}
                           onChange={onChangeHandler}/>
                </label>

                <label onDoubleClick={() => setToggleEdit(!toggleEdit)}>
                    Posted by:
                    <input type="text" name="posted_by" defaultValue={article.posted_by}
                           disabled={!toggleEdit}
                           onChange={onChangeHandler}/>
                </label>
                <label>
                    Title :
                    <input type="text" name="title" defaultValue={article.title}
                           disabled={!toggleEdit}
                           onChange={onChangeHandler}/>
                </label>
                <label>
                    Description :
                    <input type="text" name="body" defaultValue={article.body}
                           disabled={!toggleEdit}
                           onChange={onChangeHandler}/>
                </label>
                {/*<input type="submit" value="Submit"/>*/}
                <p> {article.date}</p>
                {toggleEdit && <button type="submit"> Save Update</button>}
            </form>

            <div className="row">
                <div className="col-md-1">
                    <button className="btn btn-primary"
                            onClick={() => setToggleEdit(!toggleEdit)}>Update
                    </button>
                </div>
                <div className="col">
                    <Button onClick={onDelete} className="btn btn-danger">Delete</Button>
                </div>
            </div>

            <hr/>
        </div>
    )
}


export default Article;