import './App.css';
import React, {useState, useEffect} from "react";
import ArticleList from "./components/ArticleList";
import CreatePosts from "./components/CreatePosts";
import {Container, Navbar} from "react-bootstrap";
import TopDesigns from "./components/TopDesigns";


function App() {
    const [articles, setArticles] = useState([])
    // const [allData, setAllData] = useState([])


    useEffect(() => {
        fetch('http://127.0.0.1:5000/get', {
            'method': 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(resp => setArticles(resp))
            .catch(error => console.log(error))
    }, [])


    return (
        <>
            <TopDesigns />
            <CreatePosts articles={articles} setArticles={setArticles}/>
            <ArticleList setArticles={setArticles} articles={articles}/>

        </>
    );
}

export default App;
