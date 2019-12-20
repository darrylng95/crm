import React, { Component } from 'react';
import ViewCustomerDetails from './ViewCustomerDetails';
import { connect } from 'react-redux';
import {
  Paper,
  Grid,
  Typography,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Button
} from '@material-ui/core';
// temporory import
import placeholder from '../icons/placeholder.png'
import Axios from 'axios'
class ViewCustomerList extends Component {
  

  render() {
      const {firstname, lastname, role} = this.props.users;
    return (
      <div style={{ width: '100%', maxWidth: '100%' }}>
        <br/>
        <Paper>
          <br />
          <Grid container spacing={2} align="center">
            <Grid item xs={6} sm={6}>
              <img
                src={placeholder}
                alt=""
                style={{
                  width: '95%',
                  height: '95%',
                  maxWidth: '7.5rem',
                  maxHeight: '8.5rem'
                }}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <Grid item xs align="center">
                <Table size="small" padding="none">
                  <TableHead>
                    <Typography variant="subtitle2">
                      <b>Name: {lastname} {firstname}</b>
                    </Typography>
                  </TableHead>
                  <br />
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <b>Role:</b> {role}
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>
                        <Button variant="contained" color="secondary"
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Grid>
            </Grid>
            <Grid>
            </Grid>
          </Grid>
          <br/>
          <Grid item xs = {12} align = "center">
              <ViewCustomerDetails  firstname = {firstname} lastname = {lastname} role = {role}/>
          </Grid>
          <br/>
        </Paper>
      </div>
    );
  }
}


export default connect(null)(ViewCustomerList);
