import axios from "axios";

const initialState = {
  cart: [],
  loading: false,
  success: false,
  successMessage: "",
  error: false,
  errorMessage: ""
};

const ADD_TO_CART = "ADD_TO_CART";
const GET_CART = "GET_CART";
const UPDATE_QTY = "UPDATE_QTY";
const DELETE_ITEM = "DELETE_ITEM";
const CLEAR_CART_MESSAGES = "CLEAR_CART_MESSAGES";
const CLEAR_CART = "CLEAR_CART";

export function addToCart(product_id) {
  let action = {
    type: ADD_TO_CART,
    payload: axios.post("/api/cart", { product_id })
  };
  return action;
}

export function getCart() {
  let action = {
    type: GET_CART,
    payload: axios.get("/api/cart")
  };
  return action;
}

export function updateQty(cart_id, newQty) {
  let action = {
    type: UPDATE_QTY,
    payload: axios.put("/api/cart", { cart_id, newQty })
  };
  return action;
}

export function deleteItem(cart_id) {
  let action = {
    type: DELETE_ITEM,
    payload: axios.delete(`/api/cart/${cart_id}`)
  };
  return action;
}

export function clearCartReducer() {
  let action = {
    type: CLEAR_CART_MESSAGES
  };
  return action;
}

export function clearCart() {
  let action = {
    type: CLEAR_CART,
    payload: axios.delete("/api/clear")
  };
  return action;
}

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART + "_PENDING":
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: "",
        success: false,
        successMessage: ""
      };
    case ADD_TO_CART + "_REJECTED":
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload.response.data,
        success: false,
        successMessage: ""
      };
    case ADD_TO_CART + "_FULFILLED":
      return {
        ...state,
        cart: action.payload.data,
        loading: false,
        error: false,
        success: true,
        successMessage: "Item added to cart"
      };
    case GET_CART + "_PENDING":
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: "",
        success: false,
        successMessage: ""
      };
    case GET_CART + "_REJECTED":
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload.response.data,
        success: false,
        successMessage: ""
      };
    case GET_CART + "_FULFILLED":
      return {
        ...state,
        cart: action.payload.data,
        loading: false,
        error: false,
        success: false,
        successMessage: ""
      };
    case UPDATE_QTY + "_PENDING":
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: "",
        success: false,
        successMessage: ""
      };
    case UPDATE_QTY + "_REJECTED":
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload.response.data,
        success: false,
        successMessage: ""
      };
    case UPDATE_QTY + "_FULFILLED":
      return {
        ...state,
        cart: action.payload.data,
        loading: false,
        error: false,
        success: true,
        successMessage: "Cart quantity updated"
      };
    case DELETE_ITEM + "_PENDING":
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: "",
        success: false,
        successMessage: ""
      };
    case DELETE_ITEM + "_REJECTED":
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload.response.data,
        successMessage: "",
        success: false
      };
    case DELETE_ITEM + "_FULFILLED":
      console.log(state.successMessage);
      return {
        ...state,
        cart: action.payload.data,
        loading: false,
        error: false,
        errorMessage: "",
        success: true,
        successMessage: "Item deleted from cart"
      };
    case CLEAR_CART_MESSAGES:
      return {
        ...state,
        cart: state.cart,
        error: false,
        errorMessage: "",
        success: false,
        successMessage: ""
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: action.payload,
        error: false,
        errorMessage: "",
        success: false,
        successMessage: ""
      };
    default:
      return state;
  }
}
