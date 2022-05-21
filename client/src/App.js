import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from "react-router-dom";

import ShopPage from './pages/shoppage/shoppage.component';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from "./pages/signin-and-signup-page/signin-and-signup.page";
import ShoppingCartPage from "./pages/shopping-cart-page/shopping-cart-page.component"
import CollectionPage from './pages/collectionpage/collectionpage.component';
import AboutUs from './pages/about-us/about-us.component';
import NotFound from "./components/not-found/not-found.component";
import Burger from "./components/burger/burger.component";

import { checkUserSession } from "./reducers/user/user.actions"

function App() {
  const dispatch = useDispatch()
  const { currentUser } = useSelector(state => state.userReducer)

  useEffect(() => {
    dispatch(checkUserSession())
  }, [])

  return (
    <>
      <Header />
      <Burger />
      <div className="app">
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path="shop">
            <Route index element={<ShopPage/>}/>
            <Route path=":collection" element={<CollectionPage/>}/>
          </Route>
          <Route path="about" element={<AboutUs/>}/>
          {!currentUser && <Route path="signin" element={<SignInAndSignUpPage/>}/>}
          {currentUser && <Route path="shoppingcart" element={<ShoppingCartPage/>}/>}
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </>
  );
}

 export default App;
