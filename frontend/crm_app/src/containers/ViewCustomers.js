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
    return (
      <div>
        <h1>{this.props.users}</h1>
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
    onFetchCustomers: () => dispatch (actions.getUserTest()),
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (ViewCustomers);
