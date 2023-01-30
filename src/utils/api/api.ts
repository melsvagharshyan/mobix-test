import axios from 'axios';
import { IProduct } from '../types/types';

const API = axios.create({ baseURL: `https://fakestoreapi.com` });

export const fetchProducts = () => API.get<Array<IProduct>>('/products');


export const fetchSingleProduct = (id: string | undefined) => API.get<IProduct>(`/products/${id}`);

export const postProduct = (formData: Partial<IProduct>) => API.post<IProduct>(`/products`, formData);

