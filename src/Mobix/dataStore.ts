import {makeObservable} from "mobx";
import {fetchProducts, fetchSingleProduct} from "../utils/api/api";
import {IProduct} from "../utils/types/types";

async function getProducts(): Promise<Array<IProduct>> {
    const {data} = await fetchProducts();
    return data;
}

async function getSingleProduct(id: string | undefined): Promise<IProduct> {
    const {data} = await fetchSingleProduct(id);
    return data;
}


class DataStore {
    products: Array<IProduct> = [];
    singleProduct: IProduct | null = null

    constructor() {
        makeObservable(this, {
            products: true,
            singleProduct: true
        })
    }

    async setProducts(): Promise<void> {
        this.products = await getProducts();
    }

    async setSingleProduct(id: string | undefined): Promise<void> {
        this.singleProduct = await getSingleProduct(id)
    }

}


export default new DataStore();