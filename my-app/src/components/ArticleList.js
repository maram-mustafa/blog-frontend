import React from 'react';
import Article from "./Article";


function ArticleList({articles}) {
    return (
        <div>
            {articles && articles.map(article => {
                return (
                    <Article key={article.id} article={article}/>
                )
            })}
        </div>
    );
}

export default ArticleList;