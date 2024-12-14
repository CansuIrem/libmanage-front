
import React, { useState } from 'react';
import { addBook } from '../../api/api';

const AddBook = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    category: '',
    availability: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addBook(book);
    alert('Book added successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" onChange={(e) => setBook({ ...book, title: e.target.value })} />
      <input type="text" placeholder="Author" onChange={(e) => setBook({ ...book, author: e.target.value })} />
      <input type="text" placeholder="Category" onChange={(e) => setBook({ ...book, category: e.target.value })} />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
