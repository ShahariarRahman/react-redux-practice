import { ADD_TO_CART, LOAD_PRODUCT, REMOVE_FROM_CART } from "../actionTypes/actionTypes";

const initialState = {
    products: [],
    cart: [],
};

const productReducer = (state = initialState, action) => {
    const selectedProduct = state.cart.find(product => product._id === action.payload._id);
    switch (action.type) {
        case LOAD_PRODUCT:
            return {
                ...state,
                products: action.payload,
            };
        case ADD_TO_CART:
            if (selectedProduct) {
                const newCart = state.cart.filter(product => product._id !== selectedProduct._id);
                selectedProduct.quantity += 1;
                return {
                    ...state,
                    cart: [...newCart, selectedProduct],
                };
            };
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }],
            };

        case REMOVE_FROM_CART:
            const newCart = state.cart.filter(product => product._id !== selectedProduct._id);
            if (selectedProduct.quantity > 1) {
                selectedProduct.quantity -= 1;
                return {
                    ...state,
                    cart: [...newCart, selectedProduct]
                };
            };
            return {
                ...state,
                cart: newCart,
            };
        default:
            return state;
    };
};

export default productReducer;