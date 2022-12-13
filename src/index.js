import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Login from "./pages/welcome/Login";
import Navbar from './components/Navbar';
import Register from './pages/welcome/register';
import Forgotpassword from './pages/welcome/forgotpassword'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Login />}/>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="forgotpassword" element={<Forgotpassword />} /> 
      <Route element={<Navbar />}>
        {/* <Route index element={<Home />} /> */}
        <Route path="home" element={<Home />} />
        <Route path="blogs" element={<Blogs />} /> 
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Route>
      {/* </Route> */}
    </Routes>
  </BrowserRouter>
); 
