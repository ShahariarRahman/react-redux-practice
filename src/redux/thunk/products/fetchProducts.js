import { loadProduct } from "../../actions/productActions";

const loadProductData = () => {
    return async (dispatch, getState) => {
        const res = await fetch('https://moontech-api.onrender.com/product');
        const data = await res.json();
        if (data.length) {
            dispatch(loadProduct(data));
        }
    };
};

export default loadProductData;