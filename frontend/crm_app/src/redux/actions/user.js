// user actions
import * as actionTypes from './actionTypes';
import Axios from 'axios';
import user from '../reducers/user';

const getUsers = users => {
  return {
    type: actionTypes.GET_USERS, //call reducer to do the action
    users: users
  };
};

export const fetchUsers = () => {
  return dispatch => {
    Axios.get('http://localhost:8000/user/people', {
      withCredentials: false
    })
      .then(response => {
        console.log(response.data);
        dispatch(getUsers(response.data));
      })
      .catch(error => {
        console.log('Fetch users failed!');
        dispatch(getUsersFailed());
      });
  };
};

const getUsersFailed = () => {
  return {
    type: actionTypes.GET_USERS_FAILED
  };
};

export const getUserTest = () => {
  return {
    type: actionTypes.GET_USERS_TEST
  }
};


export const addUser = (firstname, lastname, role) => {
  return {
    type: actionTypes.ADD_USER,
    userData: {
      firstname: firstname,
      lastname: lastname,
      role: role
    }
  };
};
