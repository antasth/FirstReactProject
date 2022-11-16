import React from 'react';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import PostsIdPage from '../pages/PostIdPage';
import {  Route, Routes } from 'react-router-dom';
 
const AppRouter = () => {
   return (
      <Routes>
      <Route path="/about" element={<About />} />
      <Route exact path="/posts" element={<Posts />} />
      <Route exact path="/posts/:id" element={<PostsIdPage />} />
      <Route path="*" element={<Error />} />
    </Routes>
   );
};

export default AppRouter;