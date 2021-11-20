import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Route, Routes } from "react-router-dom";
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
 
 function App() {
     return (
        <>
            <Header/>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="shop" element={<ShopPage/>}/>
            </Routes>
        </>
     );
 }

 export default App; 