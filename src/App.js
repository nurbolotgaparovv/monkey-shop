import './App.css';
import Header from "./components/Header";
import {Routes,Route} from "react-router-dom";
import Product from "./pages/Product";
import Basket from "./pages/Basket";
import Favorites from "./pages/Favorites";




function App() {
  return (
    <div className="App">
     <Header/>
        <Routes>
            <Route path={"/"} element={<Product/>}/>
            <Route path={"/basket"} element={<Basket/>}/>
            <Route path={"/favorites"} element={<Favorites/>}/>
        </Routes>

    </div>
  );
}

export default App;
