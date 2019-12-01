import React from 'react';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

function CountriesListItem ({country}){
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        paddingLeft: 0,
        paddingRight: 0,
      },
    }),
  );
  const classes = useStyles();
  return(
    <ListItem className={classes.root}>
      <ListItemText>
        <Typography variant="body1">{country.name}</Typography>
        <Typography variant="caption" component="p">Native: {country.native}</Typography>
        <Typography variant="caption" component="p">Phone: {country.phone}</Typography>
      </ListItemText>
    </ListItem>
  )
}

export default CountriesListItem;
