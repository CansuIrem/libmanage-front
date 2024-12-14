import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate import ediliyor
import './SystemMenu.css';

const SystemMenu = () => {
  const navigate = useNavigate(); // useNavigate ile navigate fonksiyonu alınıyor

  const handleNavigation = (path) => {
    navigate(path); // Belirtilen yola yönlendirme yapılır
  };

  return (
    <div className="system-menu-container">
      <div className="system-menu-box">
        <h2>System Menu</h2>
        <div className="menu-buttons">
          <button onClick={() => handleNavigation('/category-management')}>Category Management</button>
          <button onClick={() => handleNavigation('/book-services')}>Book Services</button>
          <button onClick={() => handleNavigation('/add-book')}>Add Book</button>
          <button className='back-button' onClick={() => handleNavigation('/login')}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default SystemMenu;
