import { useState } from "react";
import Home from "../src/page/home/home"
import Blog from "../../FE/src/page/blog/blog"
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0);
  return(
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Blog" element={<Blog/>}></Route>
      </Routes>
     </BrowserRouter>
  )
}

export default App;