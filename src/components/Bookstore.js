import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Books from '../redux/Books/Books';
import Categories from '../redux/Categories/Categories';
import Navbar from './Navbar';

const Bookstore = () => (
  <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default Bookstore;