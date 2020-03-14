import axios from "axios";

const initialState = {
  productList: [],
  loading: false,
  error: false,
  errorMessage: ""
};

const GET_PRODUCTS_BY_TYPE = "GET_PRODUCTS_BY_TYPE";

export function getProductsByType(type) {
  let action = {
    type: GET_PRODUCTS_BY_TYPE,
    payload: axios.get(`/api/products/${type}`)
  };
  return action;
}

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS_BY_TYPE + "_PENDING":
      return { ...state, loading: true, error: false, errorMessage: "" };
    case GET_PRODUCTS_BY_TYPE + "_REJECTED":
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload.response.data
      };
    case GET_PRODUCTS_BY_TYPE + "_FULFILLED":
      return {
        ...state,
        productList: action.payload.data,
        loading: false,
        error: false
      };
    default:
      return state;
  }
}
