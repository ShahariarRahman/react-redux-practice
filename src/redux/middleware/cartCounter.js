import { ADD_TO_CART } from '../actionTypes/actionTypes'
const cartCounter = (store) => (next) => (action) => {
    if (action.type === ADD_TO_CART) {
        console.log(action);
    }
    return next(action);
};

export default cartCounter;