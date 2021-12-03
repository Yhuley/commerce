import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import HomePage from './pages/homepage/homepage.component';
import { Route, Routes } from "react-router-dom";
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from "./pages/signin-and-signup-page/signin-and-signup.page";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";
import { setCurrentUser } from './reducers/user/user.actions';
import ShoppingCartPage from "./pages/shopping-cart-page/shopping-cart-page.component"
import CategoryPage from './pages/collectionpage/collectionpage.component';
import Loading from "./components/loading/loading.component";
import { fetchCollectionsStartAsync } from "./reducers/shop/shop.actions";
 
 function App() {
     const dispatch = useDispatch()
     const { isFetching } = useSelector(state => state.shopReducer)

     useEffect( async () => {
        const unsubscribeFromAuth = onAuthStateChanged(auth, async userAuth => {          
            if (userAuth) {               
                const userRef = await createUserProfileDocument(userAuth)
                
                onSnapshot( userRef, doc => {
                    const userData = doc.data()
                    dispatch(setCurrentUser({id: doc.id, ...userData}))
                });
            } else {
                dispatch(setCurrentUser(userAuth))
            }
        })


        dispatch(fetchCollectionsStartAsync())

        return () => { 
            unsubscribeFromAuth()
        }
     }, [])

     return (
        <>
            <Header/>
            {isFetching ? (
                <Loading />
            ) : (
                <Routes>
                    <Route index element={<HomePage/>}/>
                    <Route path="shop">
                        <Route index element={<ShopPage/>}/>
                        <Route path=":collection" element={<CategoryPage/>}/>
                    </Route>
                    <Route path="signin" element={<SignInAndSignUpPage/>}/>
                    <Route path="shoppingcart" element={<ShoppingCartPage/>}/>
                    <Route path="*" element={<div>404</div>}/>
                </Routes>
            )}
        </>
     );
 }

 export default App; 