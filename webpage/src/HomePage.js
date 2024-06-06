import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Anonymous Serverless Blog</h1>
      <Link to="/blogs/new"><input type="submit" value="Write a new blog post" /></Link><br></br><br></br>
      <Link to="/blogs"><input type="submit" value="View all blog posts" /></Link>
    </div>
  );
}

export default HomePage;
