import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "../01-Header/Header";
import About from "../03-About/About";
import Menu from "../04-Menu/Menu";
import Footer from "../06-Footer/Footer";
import Home from "../02-Home/Home";
import Contact from "../05-Contact/Contact";
import Blog1 from "../10-Blogs/Blog1";
import Blogs2 from "../10-Blogs/Blogs2";
import Blog3 from "../10-Blogs/Blog3";
import Blogs from "../10-Blogs/Blogs";

const MainRoutes: React.FC = () => {
  function AppRoutes() {
    const location = useLocation();

    const headerRoutes = [
      "/",
      "/about",
      "/menu",
      "/contact",
      "/blogs",
      "/a-food-court-for-every-craving",
      "/crispy-and-crunchy",
      "/discover-matchpoint-salem",
    ];
    const showHeader = headerRoutes.includes(location.pathname);

    return (
      <div>
        {showHeader && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/a-food-court-for-every-craving" element={<Blog1 />} />
          <Route path="/crispy-and-crunchy" element={<Blogs2 />} />
          <Route path="/discover-matchpoint-salem" element={<Blog3 />} />
        </Routes>
        <Footer />
      </div>
    );
  }
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default MainRoutes;
