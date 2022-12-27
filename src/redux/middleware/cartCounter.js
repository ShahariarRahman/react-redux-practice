const cartCounter = (store) => (next) => (action) => {

    return next(action);
};

export default cartCounter;