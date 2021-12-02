import './App.css';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HomePage from './pages/homepage/homepage.component';
import { Route, Routes } from "react-router-dom";
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from "./pages/signin-and-signup-page/signin-and-signup.page";
import { auth, db, createUserProfileDocument, convertCollectionSnapshotToMap, addCollectionAndDocuments } from "./firebase/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";
import { collection, onSnapshot } from "firebase/firestore";
import { setCurrentUserActionCreator, updateCollections } from './reducers/actions';
import ShoppingCartPage from "./pages/shopping-cart-page/shopping-cart-page.component"
import CategoryPage from './pages/collectionpage/collectionpage.component';
import { getCollectionsForPreview } from './reducers/shop/utils';
import Loading from "./components/loading/loading.component";
 
 function App() {
     const [isLoading, setIsLoading] = useState(true)
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

        const collectionRef = collection(db, "collections")

        const unsubscribeFromSnapshot = onSnapshot( collectionRef, async doc => { 
            const collectionMap = convertCollectionSnapshotToMap(doc)
            dispatch(updateCollections(collectionMap))
            setIsLoading(false)
        });

        return () => { 
            unsubscribe()
            unsubscribeFromSnapshot()
        }
     }, [])

     return (
        <>
            <Header/>
            {isLoading ? (
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