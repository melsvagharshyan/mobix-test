import { createPortal } from 'react-dom';
import styles from './BuyModal.module.scss';
import modalState from '../../stores/modalStore';
import { observer } from 'mobx-react';

const BuyModal = () => {
  const { id, open } = modalState;

  const onYes = () => {
    alert(id);
    modalState.setOpen({ val: false, id: null });
  };

  const onNo = () => {
    modalState.setOpen({ val: false, id: null });
  };

  if (!open) return null;

  return createPortal(
    <div className={styles.modalParent}>
      <div className={styles.buyModal}>
        <button onClick={onYes} className={styles.yesButton}>
          Yes
        </button>
        <button onClick={onNo} className={styles.noButton}>
          No
        </button>
      </div>
    </div>,
    document.body
  );
};

export default observer(BuyModal);
