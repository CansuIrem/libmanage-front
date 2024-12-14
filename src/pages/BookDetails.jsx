import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './BookDetails.css';
import { updateBook, deleteBook } from '../api/api';

const BookDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [book, setBook] = useState(location.state?.book || {}); // Kitap bilgisi
  const [originalBook, setOriginalBook] = useState(location.state?.book || {}); // Orijinal kitap bilgisi
  const [isUpdateMode, setIsUpdateMode] = useState(false); // Update modunu kontrol eder
  const [showConfirmation, setShowConfirmation] = useState(false); // Update popup kontrolü
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false); // Delete popup kontrolü
  const [showSuccess, setShowSuccess] = useState(false); // Başarı mesajı kontrolü

  const handleMarkAsBorrowed = () => {
    setBook((prevBook) => ({ ...prevBook, availability: 'Borrowed' })); // Availability alanını Borrowed olarak güncelle
  };

  const handleMarkAsAvailable = () => {
    setBook((prevBook) => ({ ...prevBook, availability: 'Available' })); // Availability alanını Available olarak güncelle
  };

  const handleDelete = () => {
    setShowDeleteConfirmation(true); // Delete popup göster
  };

  const handleDeleteConfirm = async () => {
    try {
      await deleteBook(book.isbn); // Kitabı sil
      setShowDeleteConfirmation(false); // Delete popup kapat
      setShowSuccess(true); // Başarı mesajını göster
      setTimeout(() => {
        setShowSuccess(false); // Başarı mesajını kapat
        navigate('/book-services'); // Book Services sayfasına yönlendir
      }, 2000);
    } catch (error) {
      console.error(error);
      alert('An error occurred while deleting the book.');
    }
  };

  const handleDeleteCancel = () => {
    setShowDeleteConfirmation(false); // Delete popup kapat
  };

  const handleApply = () => {
    setShowConfirmation(true); // Update popup göster
  };

  const handleYes = async () => {
    try {
      await updateBook(book); // Güncelleme API çağrısı
      setOriginalBook(book); // Orijinal kitap bilgilerini güncelle
      setShowConfirmation(false); // Popup kapat
      setShowSuccess(true); // Başarı mesajını göster
      setTimeout(() => {
        setShowSuccess(false); // Başarı mesajını kapat
        setIsUpdateMode(false); // Update modunu kapat
      }, 2000);
    } catch (error) {
      console.error(error);
      alert('An error occurred while updating the book.');
    }
  };

  const handleNo = () => {
    setShowConfirmation(false); // Update popup kapat
  };

  const handleBack = () => {
    if (isUpdateMode) {
      setBook(originalBook); // Orijinal kitap bilgilerini geri yükle
      setIsUpdateMode(false); // Update modunu kapat
    } else {
      navigate('/book-services'); // Kullanıcıyı Book Services sayfasına yönlendir
    }
  };

  return (
    <div className="book-details-container">
      <div className="book-details-box">
        <h2>Book</h2>
        <div className="book-field">
          <label>ISBN:</label>
          <input type="text" value={book.isbn} readOnly />
        </div>
        <div className="book-field">
          <label>Author:</label>
          <input
            type="text"
            value={book.author || ''}
            readOnly={!isUpdateMode}
            onChange={(e) => setBook({ ...book, author: e.target.value })}
          />
        </div>
        <div className="book-field">
          <label>Title:</label>
          <input
            type="text"
            value={book.title || ''}
            readOnly={!isUpdateMode}
            onChange={(e) => setBook({ ...book, title: e.target.value })}
          />
        </div>
        <div className="book-field">
          <label>Category:</label>
          <input
            type="text"
            value={book.category || ''}
            readOnly={!isUpdateMode}
            onChange={(e) => setBook({ ...book, category: e.target.value })}
          />
        </div>
        <div className="book-field">
          <label>Availability:</label>
          {isUpdateMode ? (
            <select
              value={book.availability}
              onChange={(e) => setBook({ ...book, availability: e.target.value })}
            >
              <option value="Available">Available</option>
              <option value="Borrowed">Borrowed</option>
            </select>
          ) : (
            <input type="text" value={book.availability} readOnly />
          )}
        </div>
        <div className="buttons">
          {!isUpdateMode && (
            <>
              <button onClick={handleDelete}>Delete</button>
              <button onClick={() => setIsUpdateMode(true)}>Update</button>
              <button onClick={handleMarkAsBorrowed}>Mark as Borrowed</button>
              <button onClick={handleMarkAsAvailable}>Mark as Available</button>
              <button onClick={handleBack}>Back</button>
            </>
          )}
          {isUpdateMode && (
            <>
              <button onClick={handleApply}>Apply</button>
              <button onClick={handleBack}>Back</button>
            </>
          )}
        </div>
      </div>

      {/* Update Onay Mesajı */}
      {showConfirmation && (
        <div className="popup">
          <div className="popup-box">
            <h3>System Message</h3>
            <p>It will make changes. Do you want to make it?</p>
            <div className="popup-buttons">
              <button onClick={handleYes}>Yes</button>
              <button onClick={handleNo}>No</button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Onay Mesajı */}
      {showDeleteConfirmation && (
        <div className="popup">
          <div className="popup-box">
            <h3>System Message</h3>
            <p>Are you sure you want to delete this book?</p>
            <div className="popup-buttons">
              <button onClick={handleDeleteConfirm}>Yes</button>
              <button onClick={handleDeleteCancel}>No</button>
            </div>
          </div>
        </div>
      )}

      {/* Başarı Mesajı */}
      {showSuccess && (
        <div className="popup">
          <div className="popup-box">
            <h3>System Message</h3>
            <p>Successful!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
