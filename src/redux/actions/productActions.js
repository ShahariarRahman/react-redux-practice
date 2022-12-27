import { LOAD_PRODUCT } from "../actionTypes/actionTypes";

export const loadProduct = (products) => {
    return {
        type: LOAD_PRODUCT, payload: products
    };
};