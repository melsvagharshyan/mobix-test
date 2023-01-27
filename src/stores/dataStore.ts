import { makeAutoObservable} from "mobx";
import {fetchProducts, fetchSingleProduct, postProduct} from "../utils/api/api";
import {IProduct} from "../utils/types/types";
import {IProductForm} from "../components/AddProduct";

async function getProducts(): Promise<Array<IProduct>> {
    const {data} = await fetchProducts();
    return data;
}

async function getSingleProduct(id: string | undefined): Promise<IProduct> {
    const {data} = await fetchSingleProduct(id);
    return data;
}

async function addProduct(formData: IProductForm) {
    await postProduct(formData);
}


class DataStore {
    products: Array<IProduct> = [];
    singleProduct: IProduct | null = null;


    constructor() {
        makeAutoObservable(this);
    }


    async setProducts(): Promise<void> {
        this.products = await getProducts();
    }

    async setSingleProduct(id: string | undefined): Promise<void> {
        this.singleProduct = await getSingleProduct(id)
    }

    async postNewProduct({formData, navigate}: {formData: IProductForm, navigate: Function}) {
        await addProduct(formData);
        await this.setProducts();
        navigate("/")
    }

}


export default new DataStore();