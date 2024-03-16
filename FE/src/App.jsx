import Home from "../src/page/home/home"
import Blog from "../src/page/blog/blog"
import About from "../src/page/about/about"
import Product from "../src/page/product/product"
import Contact from "../src/page/contact/contact"
import Login from "../src/page/login/login"
import Register from "../src/page/register/register"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
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