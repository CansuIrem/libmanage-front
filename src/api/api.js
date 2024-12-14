
import axios from 'axios';

const API_BASE_URL = "http://localhost:8080"; // Backend URL

export const getBooks = () => axios.get(`${API_BASE_URL}/getAllBooks`);
export const addBook = (book) => axios.post(`${API_BASE_URL}/addBook`, book);
export const updateBook = (book) => axios.put(`${API_BASE_URL}/updateBook`, book);
export const deleteBook = (isbn) => axios.delete(`${API_BASE_URL}/deleteBook/${isbn}`);
export const getCategories = () => axios.get(`${API_BASE_URL}/getAllCategories`);
export const addCategory = (category) => axios.post(`${API_BASE_URL}/addCategory`, category);

export const deleteCategory = (name) => axios.delete(`${API_BASE_URL}/deleteCategory/${name}`);
export const getBookByISBN = (isbn) => axios.get(`${API_BASE_URL}/checkBook?isbn=${isbn}`);
export const updateBookAvailability = (data) => axios.put(`${API_BASE_URL}/updateBookAvailability`, data);

