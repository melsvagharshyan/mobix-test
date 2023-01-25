import './App.css'
import {observer} from "mobx-react";
import {useEffect} from "react";
import productsState from '../src/Mobix/dataStore';

function App() {
  const {products} = productsState;

  useEffect(()=>{
    productsState.setProducts();
  },[])

  return (
    <div className="App">
      {products.map(p=> <p key={p.id}>{p.title}</p>)}
    </div>
  )
}

export default observer(App);
