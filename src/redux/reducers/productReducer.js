import { ADD_TO_CART, LOAD_PRODUCT } from "../actionTypes/actionTypes";

const initialState = {
    products: [],
    cart: [],
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PRODUCT:
            return {
                ...state,
                products: action.payload,
            };
        case ADD_TO_CART:
            const selectProduct = state.cart.find(product => product._id === action.payload._id);
            if (selectProduct) {
                const newCart = state.cart.filter(product => product._id !== action.payload._id);
                selectProduct.quantity += 1;
                return {
                    ...state,
                    cart: [...newCart, selectProduct],
                };
            };
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 0 }],
            };
        default:
            return state;
    };
};

export default productReducer;