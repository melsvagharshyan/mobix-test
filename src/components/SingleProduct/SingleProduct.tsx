import React, {useEffect} from 'react';
import {observer} from "mobx-react";
import {useParams} from "react-router-dom";
import productsData from '../../stores/dataStore';
import styles from './SingleProduct.module.scss';

const SingleProduct = () => {
   const {id} = useParams();
   const {singleProduct} = productsData;

   useEffect(()=> {
      productsData.setSingleProduct(id);
   },[])


    return (
        <div className={styles.single}>
            <img src={singleProduct?.image} alt="img"/>
        </div>
    );
};

export default observer(SingleProduct);
