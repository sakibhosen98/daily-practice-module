import React from 'react';
import './Post.css';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
  const {id, title, body} = post;
  const navigate = useNavigate();
  
  const handleNavigation = () => {
    navigate(`/post/${id}`);
  }
  return (
    <div className='post'>
        <h4>ID: {id}</h4>
        <h5>{title}</h5>
        <p>{body}</p>
        <Link to={`/post/${id}`}>Show Details</Link>
        <Link to={`/post/${id}`}><button>Show Post Details</button></Link>
        <button onClick={handleNavigation}>With Button handler</button>
    </div>
  );
};

export default Post;