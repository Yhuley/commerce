import './App.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HomePage from './pages/homepage/homepage.component';
import { Route, Routes } from "react-router-dom";
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from "./pages/signin-and-signup-page/signin-and-signup.page";
import { auth, createUserProfileDocument, addCollectionAndDocuments } from "./firebase/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";
import { setCurrentUserActionCreator } from './reducers/actions';
import ShoppingCartPage from "./pages/shopping-cart-page/shopping-cart-page.component"
import CategoryPage from './pages/collectionpage/collectionpage.component';
import { getCollectionsForPreview } from './reducers/shop/utils';
 
 function App() {
     const { currentUser } = useSelector(state => state.userReducer)
     const { collections } = useSelector(state => state.shopReducer)
     const collectionsArray = getCollectionsForPreview(collections)
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
            //addCollectionAndDocuments("collections", collectionsArray.map(({ title, items}) => ({ title, items })))
        })

        return () => unsubscribe()
     }, [])

     return (
        <>
            <Header/>
            {console.log(currentUser)}
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
        </>
     );
 }

 export default App; 