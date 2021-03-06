import axios from "axios";
import { GET_LAST_ORDERS, GET_ALL_ORDERS } from "../constants";
import { allCart, cartList } from "../actions/cart";

const lastOrders = (orders) => ({
  type: GET_LAST_ORDERS,
  orders,
});

const allOrders = (orders) => ({
  type: GET_ALL_ORDERS,
  orders,
});

export const updateOrderAdress = (order) => () =>
  axios.patch("/api/checkout/adress", order);

export const updateOrderStatus = (order) => (dispatch) =>
  axios
    .patch("/api/checkout/status", order)
    .then(() => {
      dispatch(allCart([]));
    })
    .then(() => {
      dispatch(cartList([]));
    });

// export const thankYouEmail = (email) => (dispatch) => {
//   axios.post(
//     "https://gmail.us10.list-manage.com/subscribe/post?u=1f69ca6d9cfcca001b05fdf5c&amp;id=d8ed59a5f3",
//     { EMAIL: email }
//   );
// };
export const updateStock = (cart) => () =>
  axios.patch("/api/checkout/stock", cart);

export const fetchLastOrders = () => (dispatch) =>
  axios
    .get("/api/checkout/lastorders")
    .then((res) => res.data)
    .then((orders) => dispatch(lastOrders(orders)));

export const fetchAllOrders = () => (dispatch) =>
  axios
    .get("/api/checkout/allorders")
    .then((orders) => dispatch(allOrders(orders.data)));
