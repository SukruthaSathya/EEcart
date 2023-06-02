import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>Hello</>
    // <Router basename={process.env.PUBLIC_URL}>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/register" element={<RegisterPage />} />
    //     <Route path="/login" element={<LoginPage />} />
    //     <Route path="/cart" element={<CartList />} />
    //     <Route path="/productsList" element={<ProductList />} />
    //     <Route path="/product" element={<ProductPage />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
