import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const TaxDeadlineAlerts = () => {
  const [deadlines, setDeadlines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const fetchDeadlines = async () => {
      try {
        const response = await axios.get('/tax-deadlines.json');
        setDeadlines(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchDeadlines();
  }, []);

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const dayHasDeadline = deadlines.some(
        (deadline) => new Date(deadline.dueDate).toDateString() === date.toDateString()
      );
      return dayHasDeadline ? <div className="bg-red-500 rounded-full h-2 w-2 mx-auto"></div> : null;
    }
  };

  const onDateChange = (date) => {
    setSelectedDate(date);
  };

  const deadlinesForSelectedDate = deadlines.filter(
    (deadline) => new Date(deadline.dueDate).toDateString() === selectedDate.toDateString()
  );

  if (loading) {
    return <div>Loading deadlines...</div>;
  }

  if (error) {
    return <div>Error fetching deadlines: {error}</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Tax Deadline Alerts</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <Calendar
            onChange={onDateChange}
            value={selectedDate}
            tileContent={tileContent}
            className="w-full"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-4">Deadlines for {selectedDate.toLocaleDateString()}</h2>
          {deadlinesForSelectedDate.length > 0 ? (
            <ul className="space-y-4">
              {deadlinesForSelectedDate.map((deadline) => (
                <li key={deadline.id} className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-medium text-lg">{deadline.title}</h3>
                  <p className="text-sm text-gray-600">{deadline.category}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No deadlines for this date.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaxDeadlineAlerts;
