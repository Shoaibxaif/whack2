import React from "react";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Components/Signup";
import Footer from "./Components/Footer";
import Mens from "./Pages/Mens";
import Women from "./Pages/Women";
import Kids from "./Pages/Kids";
import Cart from "./Pages/Cart";

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/mens" element={<Mens/>}></Route>
        <Route path="/women" element={<Women/>}></Route>
        <Route path="/kids" element={<Kids/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
      </Router>
      <Footer/>
    </>
  );
};

export default App;
