import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Yönlendirme için
import './Home.css';
import LibManageLogo from '../assets/LibManage.png'; // Görselin yolunu ayarla

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 5 saniye sonra Login sayfasına yönlendirme
    const timer = setTimeout(() => {
      navigate('/login'); // Login sayfasına yönlendir
    }, 3000);

    return () => clearTimeout(timer); // Temizleme (sayfadan çıkarken)
  }, [navigate]);

  return (
    <div className="home-container">
      <img src={LibManageLogo} alt="LibManage Logo" className="home-logo" />
      
    </div>
  );
};

export default Home;
