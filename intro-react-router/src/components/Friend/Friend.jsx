import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
  // console.log(friend)
  const {name, email, id, phone} = friend;
  return (
    <div  className='friend'>
        <h3>{name}</h3>
        <p>Email: {email}</p>
        <p>id: {id}</p>
        <p><Link to={`/friend/${id}`}>show me details</Link></p>
    </div>
  );
};

export default Friend;