function getArticleGenerator(articles) {
    let myArticles = Array.from(articles);
    let content = document.getElementById('content');

    return () => {
        if (myArticles.length === 0) {
            return;
        }
        let currentArticle = myArticles.shift();
        content.innerHTML += `<article>${currentArticle}</article>`
    }
}

    // return () => {
    //     if (articles.length > 0) {
    //         let container = document.getElementById('çontent');
    //         let article = document.createElement('article');
    //         let currentText = articles.shift();
    //         article.innerText = currentText;
    //         container.appendChild(article);
    //     }
    // };

