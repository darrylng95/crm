//user reducer
//Reducer to handle different case and to change state of global store
//Can handle axios http request
import * as actionTypes from '../actions/actionTypes';
import Axios from 'axios';

const initialState = {
  users: [],
  error: false,
  loadingState: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS:
      return Object.assign ({}, state, {
        users: action.users,
        error: false,
        loadingState: true,
      });
    case actionTypes.GET_USERS_FAILED:
      return Object.assign ({}, state, {
        error: true,
      });
    case actionTypes.ADD_USER_START:
      return Object.assign ({}, state, {
        loadingState: true,
      });
    case actionTypes.ADD_USER_END:
      return Object.assign ({}, state, {
        users: [...state.users, action.user]
      });
    default:
      return state;
  }
};

export default user;
