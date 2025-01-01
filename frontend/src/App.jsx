// import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Register from './pages/Register';
import Login from './pages/Login';
import AddUser from './pages/AddUser';
import List from './pages/List';
import Error from './pages/Error';
import { Logout } from './pages/Logout';
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/list" element={<List />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;