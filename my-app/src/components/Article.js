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

    const onDelete = async (index) => {
        const id = index;
        try {
            await axios.delete(`http://localhost:5000/delete/${id}`);
            setArticles(prevData => prevData.filter(p => p.id !== id));
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
        <div key={article.id} >
            <form onSubmit={UpdateArticle}>
                <div>

                    <label onDoubleClick={() => setToggleEdit(!toggleEdit)}>
                        <input className="postedByEdit" type="text" name="posted_by" defaultValue={article.posted_by}
                               disabled={!toggleEdit}
                               onChange={onChangeHandler}/>
                    </label>
                </div>


                <div className="row d-flex text-center justify-content-md-center editDiv">
                    <div className="col">
                        <label>
                            <img src={newData.image} className="editImage"/>
                            {toggleEdit && <input className="mt-3 imageInput" type="text" name="image" defaultValue={article.image}
                                                  disabled={!toggleEdit}
                                                  onChange={onChangeHandler}/>}
                        </label>
                    </div>
                    <div className="col">
                        <label>
                            <input size="50" className="editTitle  mb-2" type="text" name="title"
                                   defaultValue={article.title}
                                   disabled={!toggleEdit}
                                   onChange={onChangeHandler}/>
                        </label>

                        <label>
                            <textarea className="editTextarea" rows="5" cols="60" type="text" name="body"
                                      defaultValue={article.body} disabled={!toggleEdit} onChange={onChangeHandler}/>
                        </label>
                        <p className="editDate">  {article.date}🕑</p>

                    </div>

                </div>

                {toggleEdit && <button className="saveBtn" type="submit"> Save Update</button>}
            </form>

            <div className="row ">
                <div className="col d-flex ">
                    <button className="updateBtn"
                            onClick={() => setToggleEdit(!toggleEdit)}>Update
                    </button>
                </div>
                <div className="col d-flex ">
                    <button onClick={() => onDelete(article.id)} className="deleteBtn">Delete</button>
                </div>
            </div>

            <hr/>
        </div>
    )
}


export default Article;