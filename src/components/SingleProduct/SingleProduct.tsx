import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import productsData from '../../Mobix/dataStore';
import {observer} from "mobx-react";

const SingleProduct = () => {
   const {id} = useParams();
   const {singleProduct} = productsData;

   useEffect(()=> {
      productsData.setSingleProduct(id);
   },[])


    return (
        <div>
            <p>{singleProduct?.title}</p>
        </div>
    );
};

export default observer(SingleProduct);
