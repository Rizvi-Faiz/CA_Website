import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?qInTitle="income tax"&language=en&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
        );
        setArticles(response.data.articles);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div className="p-8 text-center">Loading news updates...</div>;
  }

  if (error) {
    return <div className="p-8 text-center text-red-500">Error fetching news: {error}</div>;
  }

  return (
    <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-12">Income Tax News</h1>
            <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {articles.map((article, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                        <img className="h-48 w-full object-cover" src={article.urlToImage || 'https://via.placeholder.com/400x200?text=No+Image'} alt={article.title} />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2 h-20 overflow-hidden">{article.title}</h3>
                            <p className="text-gray-600 text-sm mb-4 h-24 overflow-hidden">{article.description}</p>
                            <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-semibold">Read Full Article</a>
                            <p className="text-gray-400 text-xs mt-4">{new Date(article.publishedAt).toLocaleDateString()}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default NewsPage;
