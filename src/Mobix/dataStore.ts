import {makeObservable} from "mobx";
import {fetchProducts} from "../utils/api/api";
import {IProduct} from "../utils/types/types";

async function getProducts() {
    const {data} = await fetchProducts();
    return data;
}


class DataStore {
    products: Array<IProduct> = []

    constructor() {
        makeObservable(this, {
            products: true
        })
    }

    async setProducts() {
        this.products = await getProducts();
    }
}


export default new DataStore();