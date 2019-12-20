import React, {Component} from 'react';
//Material ui stuffs
import {
  Box,
  TextField,
  CardHeader,
  Card,
  CardContent,
  Select,
  CircularProgress,
  Typography,
} from '@material-ui/core';
import {If, Else} from 'rc-if-else';

import Axios from 'axios';
class AddUserForm extends Component {
  render () {
    const roles = ['Old Customer', 'New Customer'];
    const {values, handleChange} = this.props;
    return (
      <div>
        <Box py={1} px={1}>
          <Card align="center">
            <CardHeader subheader="Fill in the User Details form" />
            <CardContent>
              <TextField
                required
                label="First Name"
                type="text"
                onChange={handleChange ('firstname')}
                value={values.firstname}
                margin="normal"
                variant="filled"
                helperText="This is a required field"
              />
              <br />
              <TextField
                required
                label="Last Name"
                type="text"
                onChange={handleChange ('lastname')}
                value={values.lastname}
                margin="normal"
                variant="filled"
                helperText="This is a required field"
              />
              <br />
              <Select
                native
                value={values.role}
                onChange={handleChange ('role')}
              >
                {roles.map (title => (
                  <option key={title} value={title}>
                    {title}
                  </option>
                ))}
              </Select>
              {console.log(roles)}

            </CardContent>
          </Card>
        </Box>
      </div>
    );
  }
}

export default AddUserForm;
