import styles from './App.module.scss'
import Products from "./components/Products/Products";

function App() {

    return (
        <div className={styles.App}>
            <Products/>
        </div>
    )
}

export default App;