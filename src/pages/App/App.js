import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import WrittenPage from '../WrittenPage/WrittenPage';
import SpokenPage from '../SpokenPage/SpokenPage';
import VisualPage from '../VisualPage/VisualPage';
import ContactPage from '../ContactPage/ContactPage';
import NavBar from '../../components/NavBar/NavBar';
import NewPostPage from '../NewPostPage/NewPostPage';
import PostDetailPage from '../PostDetailPage/PostDetailPage';
import HomePage from '../HomePage/HomePage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [posts, setPosts] = useState([]);

  const [selectedButton, setSelectedButton] = useState("");


  return (
    <main className="App">
        <>
          <NavBar user={user} setUser={setUser} selectedButton={selectedButton} />
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/written" element={<WrittenPage posts={posts} setPosts={setPosts}/>} />
            <Route path="/spoken" element={<SpokenPage posts={posts} setPosts={setPosts}/>} />
            <Route path="/visual" element={<VisualPage posts={posts} setPosts={setPosts}/>} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/posts/:id" element={<PostDetailPage />} />
            <Route path="/" element={<HomePage posts={posts} setPosts={setPosts} setSelectedButton={setSelectedButton} selectedButton={selectedButton}/>} />
            <Route path="/alilogsin" element={<AuthPage setUser={setUser}/>} />
            { user && <Route path="/posts/new" element={<NewPostPage />} /> }
          </Routes>
        </>
        {/* <AuthPage setUser={setUser} /> */}
    </main>
  );
}
