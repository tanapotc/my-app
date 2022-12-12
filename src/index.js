import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
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
      {/* <Route path="/" element={<Layout />}> */}
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="forgotpassword" element={<Forgotpassword />} />
      <Route  path="/" element={<Navbar />}>
        {/* <Route index element={<Home />} /> */}
        <Route index path="home" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="app" element={<App />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Route>
      {/* </Route> */}
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
