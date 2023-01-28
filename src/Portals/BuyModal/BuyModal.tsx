import React from 'react';
import { createPortal } from 'react-dom';
import styles from './BuyModal.module.scss';
import modalState from '../../stores/modalStore';
import { observer } from 'mobx-react';

const BuyModal = () => {
  const { id } = modalState;

  const onYes = () => {
    alert(id);
    modalState.setOpen({ val: false, id: null });
  };

  const onNo = () => {
    modalState.setOpen({ val: false, id: null });
  };

  return createPortal(
    <div className={styles.buyModal}>
      <button onClick={onYes} className={styles.yesButton}>
        Yes
      </button>
      <button onClick={onNo} className={styles.noButton}>
        No
      </button>
    </div>,
    document.body
  );
};

export default observer(BuyModal);
