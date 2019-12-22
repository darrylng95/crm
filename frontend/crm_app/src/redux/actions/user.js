// user actions
import * as actionTypes from './actionTypes';
import Axios from 'axios';
import user from '../reducers/user';

const getUsers = users => {
  return {
    type: actionTypes.GET_USERS, //call reducer to do the action
    users: users,
  };
};

export const fetchUsers = () => {
  return dispatch => {
    Axios.get ('http://localhost:8000/user/people', {
      withCredentials: false,
    })
      .then (response => {
        console.log (response.data);
        dispatch (getUsers (response.data));
      })
      .catch (error => {
        console.log ('Fetch users failed!');
        dispatch ({
          type: actionTypes.GET_USERS_FAILED,
        });
      });
  };
};

export const addUser = (firstname, lastname, role, successCb) => {
  return dispatch => {
    const user = {
      firstname: firstname,
      lastname: lastname,
      role: role,
    };
    dispatch ({
      type: actionTypes.ADD_USER_START,
    });
    Axios.post ('http://localhost:8000/user/person', user, {
      withCredentials: false,
    })
      .then (response => {
        console.log ('add response', response);
        //display the successful alert
        //call the fetchUsers again
        dispatch ({
          type: actionTypes.ADD_USER_END,
          user: response.data,
        }); //you adding one data, 
        console.log(successCb);
        successCb(); //fetchUsers() -- if there are 4 other person, this thing will
        console.log ('Add user:', response);
      })
      .catch (error => {
        console.log (error);
        dispatch ({type: actionTypes.GET_USERS_FAILED});
      });
  };
};
