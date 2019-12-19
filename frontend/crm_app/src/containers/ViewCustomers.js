import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../redux/actions/index';

import {
  Box,
  Grid,
  Typography,
  CircularProgress,
  List,
  ListItem,
} from '@material-ui/core';

class ViewCustomers extends Component {
  componentDidMount () {
    this.props.onFetchCustomers ();
  }

  render () {
    var usersArr = this.props.users.map((userObj) => {
    return <h1>{userObj.firstname}</h1>
    })
    return (
      <div>
        <h1>{usersArr}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.user.users,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchCustomers: () => dispatch (actions.fetchUsers()),
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (ViewCustomers);
