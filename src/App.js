import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import React from 'react';
import Navbar from "./Components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductProvider } from "./Context/Productlist";
import MainPage from "./Components/MainPage";
import Home from "./Components/Home";
import Carts from "./Components/Carts";
import Footer from './Components/Footer';


function App() {
  return (
    <>
   <BrowserRouter>
    <ProductProvider>
      <div className="container-fluid d-flex flex-column m-0 p-0 ">
        <Navbar />
        <div className="flex-grow-1 mb-5 pb-5">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/mainpage" element={<MainPage/>}/> 
            <Route path="/cart" element={<Carts/>}/>
          </Routes>
        </div>
        <div className='fixed-bottom '>
        <Footer />
        </div>
      </div>
    </ProductProvider>
   </BrowserRouter>
    </>
  
  );
}

export default App;
