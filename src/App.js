import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartList from './Pages/CartList';
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import ProductList from './Pages/ProductList';
import ProductPage from './Pages/ProductPage';
import RegisterPage from './Pages/RegisterPage';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartList />} />
        <Route path="/productsList" element={<ProductList />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
