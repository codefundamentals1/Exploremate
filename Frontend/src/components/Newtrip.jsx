import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Newtrip() {
  const [place, setPlace] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState(false);
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can do something with the form data, like send it to a server
    console.log({
      place,
      startDate,
      endDate,
      numberOfPeople,
      description
    });
  };

  return (
    <div className="  max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Plan your trip </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="place" className="block text-gray-700">Place:</label>
          <input 
            type="text" 
            id="place" 
            value={place} 
            onChange={(e) => setPlace(e.target.value)} 
            required 
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="startDate" className="block text-gray-700">Start Date:</label>
          <input 
            type="date" 
            id="startDate" 
            value={startDate} 
            onChange={(e) => setStartDate(e.target.value)} 
            required 
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="endDate" className="block text-gray-700">End Date:</label>
          <input 
            type="date" 
            id="endDate" 
            value={endDate} 
            onChange={(e) => setEndDate(e.target.value)} 
            required 
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="numberOfPeople" className="flex items-center">
            <input 
              type="checkbox" 
              id="numberOfPeople" 
              checked={numberOfPeople} 
              onChange={(e) => setNumberOfPeople(e.target.checked)} 
              className="mr-2 rounded-sm" 
            />
            <span>I agree applied <span className='text-blue-500' > t&c</span></span>
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">Description:</label>
          <textarea 
          placeholder='Add some more details (optional)'
            id="description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
          
        </div>
        <Link to='/main/details'>
     
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Lets go</button>
        </Link>
      </form>
    </div>
  );
}

export default Newtrip;
