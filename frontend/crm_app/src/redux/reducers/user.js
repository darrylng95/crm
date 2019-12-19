//user reducer
//Reducer to handle different case and to change state of global store
//Can handle axios http request
import * as actionTypes from '../actions/actionTypes';
import Axios from 'axios';

const initialState = {
  users: [],
  user: {
    firstname: '',
    lastname: '',
    role: ''
  },
  error: false
};

const user = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case actionTypes.GET_USERS:
      return {
        ...state, // spread operator so state will be in the same order as declared
        users: action.users,
        error: false
      };

    //not sure if this works
    case actionTypes.GET_USERS_TEST:
      console.log("axios called");
      Axios.get('http://localhost:8000/user/people', {
        withCredentials: false
      })
        .then(response => {
          console.log(response.data);
          return {
            ...state,
            users: response.data,
            error: false
          };
        })
        .catch(error => {
          console.log('Fetch users failed!');
          return {
            type: actionTypes.GET_USERS_FAILED
          };
        });
        break;
    case actionTypes.GET_USERS_FAILED:
      return {
        ...state,
        error: true
      };
    case actionTypes.ADD_USER:
        const user = {
            firstname: action.userData.firstname,
            lastname: action.userData.lastname,
            role: action.userData.role
        };
        Axios.post('http://localhost:8000/user/person',user,{
            withCredentials:false,
        })
        .then(response => {
            console.log('Add user:', response);
        })
        .catch(error => {
            console.log(error);
            return {
                type: actionTypes.GET_USERS_FAILED
              };
        });
        return {
            ...state,
        }
    default:
        console.log("No such action type");
        break;
  }
  return state;
};

export default user;
