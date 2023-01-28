import { makeAutoObservable } from 'mobx';

class ModalStore {
  open: boolean = false;
  id: number | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setOpen({ val, id }: { val: boolean; id: number | null }) {
    this.open = val;
    this.id = id;
  }
}

export default new ModalStore();