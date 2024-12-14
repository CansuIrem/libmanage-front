import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate fonksiyonunu ekledik
import './Login.css';

const Login = () => {
  const navigate = useNavigate(); // Yönlendirme için navigate fonksiyonunu tanımlıyoruz
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Giriş işlemleri burada yapılabilir
    console.log('Logging in with:', { username, password });
  };

  const handleCancel = () => {
    setUsername('');
    setPassword('');
    navigate('/'); // Cancel butonuna basıldığında Home sayfasına yönlendir
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-field">
          <label>Username:</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>
        <div className="login-field">
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <div className="login-buttons">
          <button onClick={handleLogin}>Log in</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
