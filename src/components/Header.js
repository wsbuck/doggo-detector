import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import InfoButton from './InfoButton';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    // backgroundColor: '#ec6c03',
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position='static' color='primary'>
        <Toolbar>
          <Typography variant='h6' color='inherit' className={classes.title}>
            Doge Detector
          </Typography>
          <InfoButton />
        </Toolbar>
      </AppBar>
    </div>
  );
}