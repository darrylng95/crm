import React, { Component } from 'react';

import Popup from 'reactjs-popup';

import {
  Paper,
  Grid,
  Typography,
  Chip,
  Card,
  CardHeader,
  CardContent,
  withStyles,
  Button
} from '@material-ui/core';

import VisbilityIcon from "@material-ui/icons/Visibility";

const MyPaper = withStyles(theme => ({
    root: {
      backgroundColor: theme.palette.primary.main,
      color: '#fff',
      padding: '2rem'
    }
  }))(Paper)

  const contentStyle = {
    maxWidth: '90vw',
    width: '95%'
  };

class ViewCustomerDetails extends Component {
  render() {
    return (
    <div>
        <Popup
        width=""
        trigger={ 
          <Chip
            icon = {<VisbilityIcon/>}
            clickableColorPrimary
            label = "View Details"
            variant = "default"
            color = "primary"          
          />

        }
        modal
        contentStyle={contentStyle}
      >
        {close => (
          <Card>
            <CardHeader
              title="Customer Details"
              
            />
            <CardContent>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                <Grid item xs={12}>
                  <MyPaper>            
                    <Typography variant="body1" gutterBottom>
                      First Name: {this.props.firstname}
              
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Last Name: {this.props.lastname}

                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Role: {this.props.role}
                    </Typography>
                  </MyPaper>
                </Grid>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                      close();
                    }}
                  >
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        )}
      </Popup>
    </div>
    );
  }
}
export default ViewCustomerDetails;
