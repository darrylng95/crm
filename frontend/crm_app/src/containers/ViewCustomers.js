import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../redux/actions/index';
import ViewCustomerList from '../components/ViewCustomerList';

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
    console.log ("I'm hereeee");
    var usersArr = this.props.users.map (userObj => {
      return <ViewCustomerList users={userObj} key= {userObj._id} />;
    });

    return (
      <List disablePadding="true" dense="true">
        
          {usersArr}
       
      </List>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.user.users,
    error: state.user.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchCustomers: () => dispatch (actions.fetchUsers ()),
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (ViewCustomers);
