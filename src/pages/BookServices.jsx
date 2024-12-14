import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookServices.css';
import { getBookByISBN } from '../api/api';

const BookServices = () => {
  const [isbn, setIsbn] = useState('');
  const [bookDetails, setBookDetails] = useState(null);
  const navigate = useNavigate();
  

  const handleFind = async () => {
    if (isbn.trim() === '') {
      alert('Please enter an ISBN');
      return;
    }
    try {
      const response = await getBookByISBN(isbn);
      setBookDetails(response.data); // Kitap bilgilerini getir
      navigate('/book-details', { state: { book: response.data } });
    } catch (error) {
      console.error(error);
      alert('Book not found or an error occurred');
    }
  };

  const handleBack = () => {
    navigate('/system-menu'); // System Menu'ye yönlendir
  };

  return (
    <div className="book-services-container">
      <div className="book-services-box">
        <h2>Search Books</h2>
        <div className="isbn-input">
          <label>ISBN:</label>
          <input
            type="text"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            placeholder="Enter ISBN"
          />
        </div>
        <div className="buttons">
          <button onClick={handleFind}>Find</button>
          <button onClick={handleBack}>Back</button>
        </div>
        {bookDetails && (
          <div className="book-details">
            <h3>Book Details:</h3>
            <p><strong>Title:</strong> {bookDetails.title}</p>
            <p><strong>Author:</strong> {bookDetails.author}</p>
            <p><strong>Category:</strong> {bookDetails.category}</p>
            <p><strong>Availability:</strong> {bookDetails.availability ? 'Available' : 'Borrowed'}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookServices;
