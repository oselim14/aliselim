import React from 'react';
import { Link } from 'react-router-dom';
import './PostCard.css';

export default function ({post}) {
    return (
        <Link to={`/posts/${post._id}`}>
            <div className="post-card">
                <h1 className="card-title"> {post.title} </h1>
                <img src={post.image} alt={post.title} className="card-image"/>
            </div>
        </Link>)
}