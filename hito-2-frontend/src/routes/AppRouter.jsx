import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";

const AppRouter = () => {

  return (

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/galeria" element={<Gallery />} />

      <Route path="/tienda" element={<Shop />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/cart" element={<Cart />} />

      <Route path="/profile" element={<Profile />} />

    </Routes>

  );
};

export default AppRouter;