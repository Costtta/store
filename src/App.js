import Slider from "./components/Slider";
import Sales from "./components/Sales";
import FilterClothes from "./components/FilterClothes";
import { Route, Routes } from "react-router";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import {BrowserRouter} from 'react-router'

function App() {
  useEffect(() => {
    document.title = 'Store'
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = `${process.env.PUBLIC_URL}/logo.avif`;
    link.type = 'image/x-icon'
    document.head.appendChild(link)
  })
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <>
        <Navbar />
        <Routes>
          <Route index path="/" element={
            <>
              <Slider />
              <Sales />
              <FilterClothes />
            </>
          } />
          <Route path="/cart" element={<Cart />}/>
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
