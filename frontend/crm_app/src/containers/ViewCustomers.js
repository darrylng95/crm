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
    console.log("fetched");
  }

  render () {
    console.log("users: ",this.props.users);
    return (<h1>test {this.props.users}</h1>);
  }
}

const mapStateToProps = state => {
  return {
    customers: state.user.users,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchCustomers: () => dispatch (actions.getUserTest()),
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (ViewCustomers);
