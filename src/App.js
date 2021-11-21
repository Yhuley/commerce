import './App.css';
import React, { useState, useEffect } from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Route, Routes } from "react-router-dom";
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from "./pages/signin-and-signup-page/signin-and-signup.page";
import { auth } from "./firebase/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";
 
 function App() {
     const [currentUser, setCurrentUser] = useState(null)

     useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
            console.log(user)
        })

        return () => unsubscribe()
     }, [])

     return (
        <>
            <Header currentUser={currentUser}/>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="shop" element={<ShopPage/>}/>
                <Route path="signin" element={<SignInAndSignUpPage/>}/>
            </Routes>
        </>
     );
 }

 export default App; 