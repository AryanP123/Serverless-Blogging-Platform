import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import BlogPage from './BlogPage';
import NewBlogPage from './NewBlogPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/new" element={<NewBlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
