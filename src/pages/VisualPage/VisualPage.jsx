import React, { useEffect } from 'react';
import * as postsAPI from '../../utilities/posts-api';
import PostCard from '../../components/PostCard/PostCard';

export default function VisualPage({posts, setPosts}) {

    useEffect(function(){
        async function getCatPosts() {
          const post = await postsAPI.getCat('Visual');
          setPosts(post)
        }
        getCatPosts();
      }, []);

  return (
    <>
      <h1 className="work-title">Visual Work</h1>
      <hr/>
      <div className="PostCards">
        {posts.map((p, idx) => 
            <PostCard post={p} key={idx}/>
          )}
      </div>
    </>
  );
}