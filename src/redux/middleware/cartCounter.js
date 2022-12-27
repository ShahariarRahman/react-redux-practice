import { ADD_TO_CART } from '../actionTypes/actionTypes'
const cartCounter = (store) => (next) => (action) => {
    if (action.type === ADD_TO_CART) {
        const newAction = {
            ...action, payload: {
                cartPosition: store.getState().product.cart.length,
                ...action.payload,
            },
        };
        return next(newAction);
    };
    return next(action);
};

export default cartCounter;