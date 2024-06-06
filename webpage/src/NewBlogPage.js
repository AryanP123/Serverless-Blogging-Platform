import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NewBlogPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [postID, setPostID] = useState(null);
  const navigate = useNavigate(); // Add this line

  useEffect(() => {
    // Fetch the current posts to determine the next PostID
    fetch('https://s5mwzmn0gk.execute-api.us-east-2.amazonaws.com/prod/BlogPosts')
      .then(response => response.json())
      .then(data => {
        const highestPostID = Math.max(...data.map(post => Number(post.PostID)));
        setPostID(highestPostID + 1);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newPost = {
      PostID: postID.toString(),
      Title: title,
      Content: content,
    };

    // Post the data to the API
    fetch('https://s5mwzmn0gk.execute-api.us-east-2.amazonaws.com/prod/BlogPosts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      navigate('/blogs'); // Add this line
    })
    .catch((error) => {
      alert(error);
    });
  };

  return (
    <div>
      <h1>Write a New Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} /><br></br><br></br>
        </label>
        <label>
          Content:<br></br>
          <textarea name="content" value={content} onChange={e => setContent(e.target.value)} /><br></br><br></br>
        </label>
        <input type="submit" value="Publish" /><br></br><br></br>
      </form>
      <Link to="/"><button>Home</button></Link><br></br><br></br>
    </div>
  );
}

export default NewBlogPage;
