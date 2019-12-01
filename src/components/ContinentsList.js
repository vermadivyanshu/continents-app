import React from 'react'
import { Query } from 'react-apollo'
import getAllContinents from '../graphql/getAllContinents.js';


import ContinentListItem from './ContinentListItem';
import List from '@material-ui/core/List';
import { Typography } from '@material-ui/core';

class ContinentsList extends React.Component {
  render() {
    let _that = this;
    
    return (
      <Query query={getAllContinents}>
        {({ loading, error, data }) => {
          if (loading) return <p>Good things take time....</p>
          if (error) return <p>Something went wrong...</p>
          return(
            <div>
              <Typography variant="h4" component="h4">Continents</Typography>
              <List className="continentsList">
              {data.continents.map((continent) => {
                return(
                  <ContinentListItem key={continent.code} continent={continent} clickHandler={_that.props.cancelAndSetSelected} />
                )
              })}
            </List>
            </div>
          )
        }}
      </Query>
    )
  }
}

export default ContinentsList;
