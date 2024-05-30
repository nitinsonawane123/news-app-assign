import React, { useState } from 'react';
import SearchForm from './SearchForm';

const apiKey = "66bd6be758cb406eab30a52aca74a70b"

const News = () => {
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  const fetchArticles = (country, category) => {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
        setTotalResults(data.totalResults);
      })
      .catch((error) => {
        console.error('Error fetching the news:', error);
      });
  };

  return (
    <div className="container mt-4">
      <SearchForm onSearch={fetchArticles} />
      {articles.length > 0 ? (
        <>
          <p style={{marginTop: '20px'}}>Total Results: {totalResults}</p>
          <div className="row">
            {articles.map((article, index) => (
              <div key={index} className="col-md-4">
                <div className="card mb-4">
                <img src={!article.urlToImage?"https://www.livemint.com/lm-img/img/2024/05/26/1600x900/Cyclone_Remal_1716685044781_1716685045021.jpg":article.urlToImage} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">{article.description}</p>
                    <p className="card-text">{article.author}</p>
                    <a href={article.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p style={{marginTop: '90px'}}>No Record Found</p>
      )}
    </div>
  );
};

export default News;
