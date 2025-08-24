import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminNews = () => {
  const [news, setNews] = useState([]);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDate, setFilterDate] = useState('');

  const API_URL = '/api/news';

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get(API_URL);
      setNews(response.data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const handleOpenModal = (item = null) => {
    if (item) {
      setTitle(item.title);
      setDate(item.date);
      setContent(item.content);
      setEditingId(item.id);
    } else {
      setTitle('');
      setDate('');
      setContent('');
      setEditingId(null);
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTitle('');
    setDate('');
    setContent('');
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !date || !content) return;

    if (editingId) {
      try {
        const response = await axios.put(`${API_URL}/${editingId}`, { title, date, content });
        setNews(news.map((item) => (item.id === editingId ? response.data : item)));
      } catch (error) {
        console.error('Error updating news:', error);
      }
    } else {
      try {
        const response = await axios.post(API_URL, { title, date, content });
        setNews([...news, response.data]);
      } catch (error) {
        console.error('Error adding news:', error);
      }
    }
    handleCloseModal();
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setNews(news.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting news:', error);
    }
  };

  const filteredNews = news.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = filterDate ? item.date === filterDate : true;
    return matchesSearch && matchesDate;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-10">News Dashboard</h1>

        {/* Controls: Add New News, Search, Filter Date */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
          <button
            onClick={() => handleOpenModal()}
            className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Add New News
          </button>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search news..."
              className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <input
              type="date"
              className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
            />
          </div>
        </div>

        {/* News Articles Grid */}
        {filteredNews.length === 0 ? (
          <p className="text-center text-gray-600 text-lg mt-10">No news items found matching your criteria.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 line-clamp-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{new Date(item.date).toLocaleDateString()}</p>
                  <p className="text-gray-700 mb-6 line-clamp-4">{item.content}</p>
                  <div className="flex justify-end space-x-3">
                    <button
                      onClick={() => handleOpenModal(item)}
                      className="bg-blue-600 hover:bg-blue-700 text-white text-base py-2 px-5 rounded-md shadow-sm transition duration-300 ease-in-out"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-600 hover:bg-red-700 text-white text-base py-2 px-5 rounded-md shadow-sm transition duration-300 ease-in-out"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal for Add/Edit News */}
        {showModal && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">{editingId ? 'Edit News Item' : 'Add New News Item'}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="modal-title" className="block text-sm font-medium text-gray-700 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    id="modal-title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="modal-date" className="block text-sm font-medium text-gray-700 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    id="modal-date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="modal-content" className="block text-sm font-medium text-gray-700 mb-1">
                    Content
                  </label>
                  <textarea
                    id="modal-content"
                    rows="6"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
                    required
                  ></textarea>
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-6 py-2 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
                  >
                    {editingId ? 'Update News' : 'Add News'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminNews;
