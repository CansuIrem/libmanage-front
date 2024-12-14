import React, { useEffect, useState } from 'react';
import { getBooks } from '../../api/api';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await getBooks();
      setBooks(response.data);
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.isbn}>
            {book.title} - {book.author} ({book.category})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
