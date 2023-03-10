import { ADD_TO_CART, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, REMOVE_TO_CART } from "../ActionTypes"

export const addItemToCart = data => ({
    type: ADD_TO_CART,
    payload: data,
})

export const RemoveFromCart = data => ({
    type: REMOVE_TO_CART,
    payload: index,
})

export const addToCWishlist = data => ({
    type: ADD_TO_WISHLIST,
    payload: data,
})

export const RemoveFromWishlist = data => ({
    type: REMOVE_FROM_WISHLIST,
    payload: index,
})