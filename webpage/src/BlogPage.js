// App.js
import React from "react";
import "./App.css";
import { Link } from 'react-router-dom';

class App extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://s5mwzmn0gk.execute-api.us-east-2.amazonaws.com/prod/BlogPosts")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          posts: json,
          DataisLoaded: true,
        });
      });
  }

  render() {
    const { DataisLoaded, posts } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Please wait some time.... </h1>
        </div>
      );

    return (
      <div className="App">
        <h1>Blog Posts</h1>
        <div className="container">
          {posts.map((post) => (
            <div className="post" key={post.PostID}>
              <h2>{post.Title}</h2>
              <p>{post.Content}</p>
            </div>
          ))}
        </div>
        <Link to="/blogs/new"><input type="submit" value="Write a new blog post" /></Link><br></br><br></br>
        <Link to="/"><input type="submit" value="Home" /></Link><br></br><br></br>
      </div>
    );
  }
}

export default App;
