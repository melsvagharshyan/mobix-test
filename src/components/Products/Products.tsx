import {observer} from "mobx-react";
import productsState from '../../stores/dataStore';
import styles from './Products.module.scss';
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";


const Products = () => {
    const {products} = productsState;
    const navigate = useNavigate();


    useEffect(() => {
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
                            <button onClick={() => navigate(`/${p.id}`)}>
                                Buy
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default observer(Products);
