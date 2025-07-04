import React from 'react';
import newsData from '../data/news';

function News() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">News</h1>
      <ul className="list-none">
        {newsData.map((news) => (
          <li key={news.id} className="mb-4">
            <h2 className="text-lg font-bold">{news.title}</h2>
            <p className="text-lg">{news.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;