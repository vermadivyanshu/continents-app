import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CountriesList from './CountriesList'

function ContinentDetail ({ continent }){
  return (
      <Card>
        <CardContent>
          <Grid container direction="row" justify="center">
            <Grid item xs={12}>
              <Typography align="left" variant="h4" component="h4">{continent.code}: {continent.name}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography align="left" variant="h6" component="h6">Countries</Typography>
              <CountriesList countries={continent.countries} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
  )
}

export default ContinentDetail;