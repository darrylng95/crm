import React, {Component} from 'react';
// Redux stuffs
import {connect} from 'react-redux';
import {addUser as addUserAction, fetchUsers as fetchUsersAction}   from '../redux/actions/index';
//Material ui stuffs
import {
  Box,
  Typography,
  CardHeader,
  Card,
  CardContent,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Button,
} from '@material-ui/core';
import {red} from '@material-ui/core/colors';
import {createMuiTheme} from '@material-ui/core/styles';


class ConfirmAddUser extends Component {
  /*  continue = e => {
      e.preventDefault();
      this.props.nextStep();
  } */
  render () {
    const {values, handleNext} = this.props;
    return (
      <div>
        <Box py={1} px={1}>
          <Card align="center">
            <CardHeader subheader="Confirm the Customer Details form" />
            <CardContent>
              <Table size="small" padding="none">
                <TableHead>
                  <Typography variant="h6">
                    <b><u>Customer Details</u></b>
                  </Typography>
                </TableHead>
                <br />
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <b>First Name:</b> {values.firstname}
                    </TableCell>
                  </TableRow>
                </TableBody>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <b>Last Name:</b> {values.lastname}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <b>Role:</b> {values.role}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <br />
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  this.props.onAddUser (
                    values.firstname,
                    values.lastname,
                    values.role,
                    this.props.onfetchUsers,
                  );
                  handleNext ();
                }}
              >
                Submit
              </Button><br />
            </CardContent>

          </Card>

        </Box>
      </div>
    );
  }
}

const theme = createMuiTheme ({
  palette: {
    secondary: red,
  },
  status: {
    danger: 'orange',
  },
});
 

const mapDispatchToProps = dispatch => {
  return {
    onfetchUsers: () => dispatch (fetchUsersAction),
    onAddUser: (firstname, lastname, role, successCb) =>
      dispatch (addUserAction (firstname, lastname, role, successCb)),
  };
};
export default connect (null,mapDispatchToProps) (
  ConfirmAddUser
);
