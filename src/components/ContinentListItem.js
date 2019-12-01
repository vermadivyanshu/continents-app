import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';

function ContinentListItem ({clickHandler, continent}){
  const handleOnClick = () => {
    clickHandler(continent.code);
  }
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        padding: 0,
        marginBottom: 8,
      },
      continentListItemCard: {
        width: '100%',
      }
    }),
  );
  const classes = useStyles();
  return(
    <ListItem button className={classes.root} onClick={ handleOnClick }>
      <Card className={classes.continentListItemCard}>
        <CardContent>
          <Typography variant="body1" align="center">{ continent.name }</Typography>
        </CardContent>
      </Card>
    </ListItem>
  )
}

export default ContinentListItem;
