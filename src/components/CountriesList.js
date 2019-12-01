import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import CountriesListItem from './CountriesListItem';
import List from '@material-ui/core/List'

function CountriesList ({countries }){
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        height: 200,
        width: '100%',
        overflow: 'auto',
      },
    }),
  );
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List>
        {countries.map((country) => {
          return(
            <CountriesListItem key={ country.code } country={ country } />
          )
        })}
      </List>
    </div>
  )
}

export default CountriesList;