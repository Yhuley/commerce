import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Route, Routes } from "react-router-dom";
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from "./pages/signin-and-signup-page/signin-and-signup.page";
 
 function App() {
     return (
        <>
            <Header/>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="shop" element={<ShopPage/>}/>
                <Route path="signin" element={<SignInAndSignUpPage/>}/>
            </Routes>
        </>
     );
 }

 export default App; 