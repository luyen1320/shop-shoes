import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./page/HomePage";
import Product from "./components/product/Product";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import CardList from "./components/card/CardList";
import HomeHeader from "./components/layout/HomeHeader/HomeHeader";

function App() {
  return (
    <BrowserRouter>
      <HomeHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<CardList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
