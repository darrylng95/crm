import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';

import Sidebar from '../Sidebar';
import Footer from '../Footer';

const useStyles = makeStyles (theme => ({
  root: {
    paddingTop: 56,
    height: '100%',
  },
  shiftContent: {
    paddingLeft: 240,
  },
  content: {
    height: '100%',
  },
}));

export default function MainLayout () {
  console.log ('I am in MAIN!');

  const classes = useStyles ();

  return (
    <div>
      <Sidebar />
      <Footer />
    </div>
  );
};
