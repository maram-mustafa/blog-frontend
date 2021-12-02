import React from 'react';
import Article from "./Article";


function ArticleList({articles,setArticles}) {
    return (
        <div>
            {articles && articles.map(article => {
                return (
                    <Article key={article.id}
                             article={article}
                             setArticles={setArticles}
                    />
                )
            })}
        </div>
    );
}

export default ArticleList;