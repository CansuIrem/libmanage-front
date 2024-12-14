
import React from 'react';
import BookList from '../components/Book/BookList';
import AddBook from '../components/Book/AddBook';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <AddBook />
      <BookList />
    </div>
  );
};

export default Dashboard;
