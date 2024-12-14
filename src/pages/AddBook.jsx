import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CategoryManagement.css';
import './AddBook.css';


const AddBook = () => {
    const navigate = useNavigate();
    const [book, setBook] = useState({
      isbn: '',
      author: '',
      title: '',
      category: '',
      availability: 'Available', // Varsayılan değer
    });
  
    const handleAdd = async () => {
      try {
        await AddBook(book); // Kitap ekleme API çağrısı
        alert('Book added successfully!');
        navigate('/system-menu'); // Başarılı ekleme sonrası yönlendirme
      } catch (error) {
        console.error(error);
        alert('An error occurred while adding the book.');
      }
    };
  
    const handleBack = () => {
      navigate('/system-menu'); 
    };
  
    return (
      <div className="add-book-container">
        <div className="add-book-box">
          <h2>Add Book</h2>
          <div className="book-field">
            <label>ISBN:</label>
            <input
              type="text"
              value={book.isbn}
              onChange={(e) => setBook({ ...book, isbn: e.target.value })}
            />
          </div>
          <div className="book-field">
            <label>Author:</label>
            <input
              type="text"
              value={book.author}
              onChange={(e) => setBook({ ...book, author: e.target.value })}
            />
          </div>
          <div className="book-field">
            <label>Title:</label>
            <input
              type="text"
              value={book.title}
              onChange={(e) => setBook({ ...book, title: e.target.value })}
            />
          </div>
          <div className="book-field">
            <label>Category:</label>
            <input
              type="text"
              value={book.category}
              onChange={(e) => setBook({ ...book, category: e.target.value })}
            />
          </div>
          <div className="book-field">
            <label>Availability:</label>
            <select
              value={book.availability}
              onChange={(e) => setBook({ ...book, availability: e.target.value })}
            >
              <option value="Available">Available</option>
              <option value="Borrowed">Borrowed</option>
            </select>
          </div>
          <div className="buttons">
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleBack}>Back</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default AddBook;
