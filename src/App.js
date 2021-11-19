import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Routes } from "react-router-dom";

const HatsPage = () => (<div>hats</div>)
const Hat1 = () => (<div>hat1</div>)
const Hat2 = () => (<div>hat2</div>)

 function App() {
     return (
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="hats" element={<HatsPage/>}/>           
        </Routes>
     );
 }

 export default App; 