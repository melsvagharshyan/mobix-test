import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IProduct } from '../../utils/types/types';
import styles from './Product.module.scss';
import BuyModal from '../../Portals/BuyModal/BuyModal';
import modalState from '../../stores/modalStore';
import { observer } from 'mobx-react';

type IProps = {
  product: IProduct;
};

const Product: React.FC<IProps> = ({ product }) => {
  const [show, setShow] = useState<boolean>(false);
  const { open } = modalState;
  const navigate = useNavigate();

  return (
    <div className={styles.product}>
      <p onClick={() => navigate(`/${product.id}`)}>{product.category}</p>
      <img src={product.image} alt="img" />
      <button
        onClick={() => {
          modalState.setOpen({ val: true, id: product.id });
        }}
      >
        Buy
      </button>
      <button
        onClick={() => setShow((prev) => !prev)}
        className={styles.detail}
      >
        {show ? 'Hide Details' : 'Show Details'}
      </button>
      <span>{show && product.title}</span>
      {open && <BuyModal />}
    </div>
  );
};

export default observer(Product);
