import { makeAutoObservable } from 'mobx';
import {
  fetchProducts,
  fetchSingleProduct,
  postProduct,
} from '../utils/api/api';
import { IProduct } from '../utils/types/types';


class DataStore {
  products: Array<IProduct> = [];
  singleProduct: IProduct | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async setProducts(): Promise<void> {
    const { data } = await fetchProducts();
    this.products = data;
  }

  async setSingleProduct(id: string | undefined): Promise<void> {
    const { data } = await fetchSingleProduct(id);
    this.singleProduct = data;
  }

  async postNewProduct({formData, navigate}: { formData: Partial<IProduct>; navigate: Function }) {
    const {data} = await postProduct(formData);
    this.products.push(data);
    navigate('/');
  }
}


export default new DataStore();