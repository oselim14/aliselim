import React, {useEffect} from 'react';
import './HomePage.css';
import Hero from '../../components/Hero/Hero';
import {Link} from 'react-router-dom';
import * as postsAPI from '../../utilities/posts-api';

export default function HomePage({posts, setPosts, setSelectedButton, selectedButton}) {

  useEffect(function(){
    async function getAllPosts() {
      const post = await postsAPI.getAll();
      setPosts(post)
    }
    getAllPosts();
  }, []);

  return (
    <>
      <Hero setSelectedButton={setSelectedButton} selectedButton={selectedButton} />
      <main className='homepage-main'>
        {posts.map((p, idx) => 
            <div className='homepage-posts'>
              <Link to={`/posts/${p._id}`} key={idx}>
              <h1 className='homepage-title'> {p.title} </h1>
              </Link>
              <div>
              <img src={p.image} alt={p.title} className='homepage-img' height="400" />
              <p>{p.body}</p>
              </div>
              <hr/>
            </div>
        )}
      </main>
    </>
  );
}