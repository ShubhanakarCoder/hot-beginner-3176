import { ADD_TO_CART, REMOVE_TO_CART } from "../ActionTypes";

export const reducers = (initialState = [], actions) => {
    switch (actions) {
        case ADD_TO_CART:
            return [...initialState, ...actions.payload]
        case REMOVE_TO_CART:
            const deletedArray = initialState.filter((item, index) => {
                return index !== actions.payload
            });

            return deletedArray
        default:
            return initialState
    }
}