import './App.css';
import {Routes, Route, Navigate, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import HomePage from './components/HomePage';
import {Blogpage, blogLoader }  from './components/BlogPage';
import AboutPage from './components/AboutPage';
import NotFoundPage from "./components/NotFoundPage";
import Layout from "./components/Layout";
import {postLoader, Singlepage} from "./components/SinglePage.jsx";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import LoginPage from "./components/LoginPage";
import RequireAuth from "./components/hoc/RequireAuth";
import {AuthProvider} from "./components/hoc/AuthProvider";
import React from "react";
//index is used when there is one link for 2 components not to repeat 2 link address
//Navigate pereadresaciya redirect
//redirect is good when we have 1 component and 2 different links
//replace:true wont be saved in the story of browser
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/> }>
    <Route index element={<HomePage /> } />
    <Route path="about/" element={<AboutPage /> } >
      <Route path="contacts" element={<p>Our contact</p>} />
      <Route path="team" element={<p>Our team</p>} />
    </Route>
    <Route path="about-us" element={<Navigate to={'/about'} replace /> } />
    <Route path="posts" element={<Blogpage /> } loader = {blogLoader} />
    <Route path="posts/:id" element={<Singlepage /> } loader={postLoader} />
    <Route path="posts/:id/edit" element={<EditPost /> } />
    <Route path="posts/new" element={
      <RequireAuth>
        <CreatePost />
      </RequireAuth>
    } />
    <Route path="login" element={<LoginPage />} />
    <Route path="*" element={<NotFoundPage /> } />
  </Route>
))
function App() {
  return (
    <div>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;
