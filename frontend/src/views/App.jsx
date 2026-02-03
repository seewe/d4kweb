import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogsPage from "../pages/BlogsPage";
import ExpertsPage from "../pages/ExpertsPage";
import Page404 from "../pages/Page404";
import HomePage from "../pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogsPage />} />
        <Route path="/expert" element={<ExpertsPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
