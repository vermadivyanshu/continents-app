import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

export default function NavBar({ setContinentToDisplay, cancelRequest }) {
  const onClickHandler = () => {
    setContinentToDisplay(null);
    cancelRequest();
  }

  return (
    <AppBar position="fixed">
      <Toolbar variant="dense">
        <Button onClick={ onClickHandler } color="inherit">Home</Button>
      </Toolbar>
    </AppBar>
  );
}