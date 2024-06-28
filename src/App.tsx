import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Blog from "./pages/blog";
import Blogs from "./pages/blogs";
import Publish from "./pages/publish";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Blog/:id" element={<Blog />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Publish" element={<Publish />} />
      </Routes>
    </Router>
  );
}

export default App;
