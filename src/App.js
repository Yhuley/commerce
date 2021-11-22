import './App.css';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HomePage from './pages/homepage/homepage.component';
import { Route, Routes } from "react-router-dom";
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from "./pages/signin-and-signup-page/signin-and-signup.page";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";
import { SET_CURRENT_USER, setCurrentUserActionCreator } from './reducers/actions';
 
 function App() {
     //const [currentUser, setCurrentUser] = useState(null)
     const currentUser = useSelector(state => state.userReducer.currentUser)
     const dispatch = useDispatch()


     useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async userAuth => {          
            if (userAuth) {               
                const userRef = await createUserProfileDocument(userAuth)
                
                onSnapshot( userRef, doc => {
                    const userData = doc.data()
                    dispatch(setCurrentUserActionCreator({id: doc.id, ...userData}))
                });
            } else {
                dispatch(setCurrentUserActionCreator(userAuth))
            }
            
        })

        return () => unsubscribe()
     }, [])

     return (
        <>
            <Header/>
            {console.log(currentUser)}
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="shop" element={<ShopPage/>}/>
                <Route path="signin" element={<SignInAndSignUpPage/>}/>
            </Routes>
        </>
     );
 }

 export default App; 