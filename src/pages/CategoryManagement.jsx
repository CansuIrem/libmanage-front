import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CategoryManagement.css';
import { getCategories, addCategory, deleteCategory } from '../api/api';

const CategoryManagement = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(''); // Seçili kategoriyi tutar
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      //const response = await getCategories();
      //setCategories(response.data.categories);
    };
    fetchCategories();
  }, []);

  const handleAddCategory = async () => {
    if (newCategory.trim() === '') {
      alert('Category name cannot be empty');
      return;
    }
    try {
      await addCategory({ name: newCategory });
      setCategories([...categories, { name: newCategory }]);
      setNewCategory('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteCategory = async () => {
    if (!selectedCategory) {
      alert('Please select a category to delete.');
      return;
    }
    try {
      await deleteCategory(selectedCategory);
      setCategories(categories.filter((cat) => cat.name !== selectedCategory));
      setSelectedCategory(''); // Seçimi sıfırla
    } catch (error) {
      console.error(error);
    }
  };

  const handleBack = () => {
    navigate('/system-menu'); // System Menu'ye yönlendir
  };

  return (
    <div className="category-management-container">
      <div className="category-management-box">
        <h2>Category Management</h2>
        <div className="category-list">
          {categories.map((category, index) => (
            <div key={index} className="category-item">
              <input
                type="radio"
                name="category"
                value={category.name}
                onChange={() => setSelectedCategory(category.name)} // Seçimi günceller
              />
              {category.name}
            </div>
          ))}
        </div>
        <div className="category-actions">
          <input
            type="text"
            placeholder="Add Category"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <button onClick={handleAddCategory}>Add</button>
          <button onClick={handleDeleteCategory} className="delete-button">
            Delete
          </button>
        </div>
        <button className="back-button" onClick={handleBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default CategoryManagement;
