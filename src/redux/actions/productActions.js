import { ADD_TO_CART, LOAD_PRODUCT } from "../actionTypes/actionTypes";

export const loadProduct = (products) => {
    return {
        type: LOAD_PRODUCT, payload: products,
    };
};

export const addTOCart = (product) => {
    return {
        type: ADD_TO_CART, payload: product,
    };
}