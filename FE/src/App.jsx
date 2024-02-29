import { useState } from "react";
import Home from "../src/page/home/home"
import Blog from "../../FE/src/page/blog/blog"
import About from "../../FE/src/page/about/about"
import Product from "../../FE/src/page/product/product"
import Contact from "../../FE/src/page/contact/contact"
import Login from "../../FE/src/page/login/login"
import Register from "../../FE/src/page/register/register"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Blog" element={<Blog />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Product" element={<Product />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;