import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Products from "./pages/Products";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";

export const Apps = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
