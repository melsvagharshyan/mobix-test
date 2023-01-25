import axios from 'axios';
import {IProduct} from "../types/types";

const API = axios.create({baseURL:`https://fakestoreapi.com`});

export const fetchProducts = ()=> {
    return API.get<Array<IProduct>>("/products");
}


export default API;