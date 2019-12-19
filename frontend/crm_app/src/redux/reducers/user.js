//user reducer
//Reducer to handle different case and to change state of global store
//Can handle axios http request
import * as actionTypes from '../actions/actionTypes';
import Axios from 'axios';

const initialState = {
  users: [],
  error: false
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS:
      return Object.assign({}, state, {
        users: action.users,
        error: false
      });    
    case actionTypes.GET_USERS_FAILED:
      return Object.assign({}, state, {
        error: true
      })
    default:
       return state;
  }
};

export default user;
