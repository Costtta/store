import Slider from "./components/Slider";
import Sales from "./components/Sales";
import FilterClothes from "./components/FilterClothes";
import { Route, Routes } from "react-router";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = '/public/logo.avif';
    link.type = 'image/x-icon'

  })
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
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
  );
}

export default App;
