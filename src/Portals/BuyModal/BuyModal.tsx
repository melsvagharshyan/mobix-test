import { createPortal } from 'react-dom';
import styles from './BuyModal.module.scss';
import modalState from '../../stores/modalStore';
import { observer } from 'mobx-react';
import openSound from '../../assets/open.wav';
import closeSound from '../../assets/close.wav';

const BuyModal = () => {
  const {  open } = modalState;

  const onYes = () => {
    modalState.setOpen({ val: false, id: null });
    new Audio(openSound).play();
  };

  const onNo = () => {
    modalState.setOpen({ val: false, id: null });
    new Audio(closeSound).play();
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
