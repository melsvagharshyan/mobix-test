import {observer} from "mobx-react";
import productsState from '../../Mobix/dataStore';
import styles from './Products.module.scss';
import {useEffect} from "react";


const Products = () => {
    const {products} = productsState;

    useEffect(()=>{
        productsState.setProducts();
    })

    return (
        <div className={styles.products}>
            {
                products.map(p => {
                    return (
                        <div className={styles.product} key={p.id}>
                            <p>{p.title}</p>
                            <img src={p.image} alt="img"/>
                            <button>Buy</button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default observer(Products);
