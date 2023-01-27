import styles from './App.module.scss'
import Products from "./components/Products/Products";
import {Route, Routes} from "react-router-dom";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import AddProduct from "./components/AddProduct";

function App() {

    return (
        <div className={styles.App}>
            <Routes>
                <Route path="/" element={<Products/>}/>
                <Route path="/:id" element={<SingleProduct/>}/>
                <Route path="/add" element={<AddProduct/>}/>
            </Routes>
        </div>
    )
}

export default App;