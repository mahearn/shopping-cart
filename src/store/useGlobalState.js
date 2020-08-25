import { useState } from 'react';

const AUTHENTICATE = 'AUTHENTICATE';
const LOGOUT = 'LOGOUT';
const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_PRODUCT = 'SET_PRODUCT';
const VIEW_CART = 'VIEW_CART';
const VIEW_PRODUCT = 'VIEW_PRODUCT';
const ADD_TO_CART = 'ADD_TO_CART';
const RESTORE_CART_FROM_STORAGE = 'RESTORE_CART_FROM_STORAGE';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
const UPDATE_TOTAL = 'UPDATE_TOTAL';
const CLEAR_CART = 'CLEAR_CART';

const useGlobalState = () => {
  const [state, setState] = useState({
    products: [],
    cartContents: [],
    grandTotal: 0,
    isLoading: true,
    isAuthenticated: true, //mocked here for now, until we set up OAuth
  });

  const actions = (action) => {
    const { type, payload } = action;
    switch (type) {
      case AUTHENTICATE:
        return setState(payload);

      case LOGOUT:
        //TODO: ??
        return null;

      case SET_PRODUCTS:
        return setState(payload);

      case SET_PRODUCT:
        return setState(payload);

      case VIEW_CART:
        return setState(payload);

      case VIEW_PRODUCT:
        return setState(payload);

      case ADD_TO_CART:
        let index = state.cartContents.findIndex((el) => el.id == payload.id);

        if (index == -1) {
          return setState({
            ...state,
            cartContents: [...state.cartContents, payload],
          });
        } else {
          return state;
        }

      /*  Add 1 or multiple items taken from local storage, in the case where user logs in 
                from the checkout stage and therefore the app is refreshed.
            */
      case RESTORE_CART_FROM_STORAGE:
        //We can assume state is empty, since the app is being refreshed as a result of the login callback
        return setState({ ...state, cartContents: payload });

      case REMOVE_FROM_CART:
        const newList = state.cartContents.filter(
          (item) => item.id !== payload
        );
        return setState({ ...state, cartContents: newList });

      case UPDATE_QUANTITY:
        return setState({ ...state, cartContents: payload });

      case UPDATE_TOTAL:
        let total = state.cartContents.reduce((tot, item) => {
          tot += item.price * item.qty;
          return tot;
        }, 0);
        return setState({ ...state, grandTotal: total });

      case CLEAR_CART:
        let newContents = [];
        return setState({ ...state, cartContents: newContents });

      default:
        return state;
    }
  };

  return { state, actions };
};

export default useGlobalState;
