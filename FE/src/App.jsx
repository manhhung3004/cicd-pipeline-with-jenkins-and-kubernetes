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
// ----------------------------
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const App = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Gửi yêu cầu GET tới địa chỉ /users trên server
//         const response = await axios.get("http://localhost:5000/users");
//         // Cập nhật state users với dữ liệu nhận được từ server
//         setUsers(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData(); // Gọi hàm fetchData khi component được mount
//   }, []); // useEffect này sẽ chỉ được gọi một lần sau khi component được mount

//   return (
//     <div>
//       <h1>User List</h1>
//       <ul>
//         {users.map(user => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
