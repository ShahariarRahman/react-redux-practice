import { LOAD_PRODUCT } from "../actionTypes/actionTypes";

const initialState = {
    products: [],
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PRODUCT:
            return {
                ...state,
                products: action.payload,
            };
        default:
            return state;
    };
};

export default productReducer;