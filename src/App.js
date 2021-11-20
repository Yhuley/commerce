import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Route, Routes, Outlet } from "react-router-dom";

const HatsPage = (props) => {
 return (
    <div>
        HatsPage
        <Outlet/>
    </div>)
}
const Hat1 = () => (<div>hat1</div>)


 function App() {
     return (
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="hats/*" element={<HatsPage/>}/>
        </Routes>
     );
 }

 export default App; 