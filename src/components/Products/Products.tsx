import { observer } from 'mobx-react';
import productsState from '../../stores/dataStore';
import styles from './Products.module.scss';
import { useEffect } from 'react';
import Product from '../Product/Product';

const Products = () => {
  const { products } = productsState;

  useEffect(() => {
    productsState.setProducts();
  },[]);

  return (
    <div className={styles.products}>
      {products.map((p) => {
        return <Product product={p} key={p.id} />;
      })}
    </div>
  );
};

export default observer(Products);
