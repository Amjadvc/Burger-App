import "./App.css";
import Navbar from "./compoenents/Navbar";
import Footer from "./compoenents/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import AddSandwich from "./pages/AddSandwish";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />

        <Route
          path="menu"
          element={
            <>
              <Menu />
            </>
          }
        />

        <Route
          path="menu/add"
          element={
            <>
              <AddSandwich />
            </>
          }
        />
        <Route
          path="cart"
          element={
            <>
              <Cart />
            </>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
