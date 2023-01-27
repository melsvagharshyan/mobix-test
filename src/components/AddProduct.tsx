import React from 'react';
import {useForm} from "react-hook-form";
import {observer} from "mobx-react";
import productsState from '../stores/dataStore';
import {useNavigate} from "react-router-dom";

export type IProductForm = {
    title: string,
    price: number,
    description: string,
    image: string,
    category: string
}

const AddProduct = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: {
        }
    } = useForm<IProductForm>({mode: "onSubmit"});
    const onSubmit = handleSubmit((formData) => {
        productsState.postNewProduct({formData, navigate});
    })
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" {...register("title")}/>
                <input type="text" {...register("price")}/>
                <input type="text" {...register("description")}/>
                <input type="file" {...register("image")}/>
                <input type="text" {...register("category")}/>
                <button>Add</button>
            </form>
        </div>
    );
};

export default observer(AddProduct);
