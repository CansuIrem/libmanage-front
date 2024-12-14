// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SystemMenu from './pages/SystemMenu';
import Login from './pages/Login';
import CategoryManagement from './pages/CategoryManagement';
import BookServices from './pages/BookServices';
import AddBook from './pages/AddBook';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/system-menu" element={<SystemMenu />} />
        <Route path="/category-management" element={<CategoryManagement />} />
        <Route path="/book-services" element={<BookServices />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/book-details" element={<BookDetails />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </Router>
  );
}

export default App;
