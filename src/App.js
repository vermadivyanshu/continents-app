import React from 'react';
import './App.css';
import CountriesList from './components/ContinentsList';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import ContinentDetails from './components/ContinentDetails'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './components/NavBar'
import withCancellableCall from './components/withCancellableCall';
import getContinent from './graphql/getContinent.js';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "https://countries.trevorblades.com"
});
// the graphQL client
// not importing ApolloClient from apollo-boost because it was not cancelling the
// request on unsubscribe. Passing queryDeduplication: false, helped
// #TODO: need to check if sending it in individual query help, so as to not affect
// other queries.
const client = new ApolloClient({
  cache,
  link,
  queryDeduplication: false
});
// Code stores the code of the continent being displayed
// continentToDisplay is used in state because we want to trigger a render, i.e.
// switch components, the component response from the graphQL api, is set in the
// property.
class App extends React.Component {
  constructor (props) {
    super(props)
    this.code = null
    this.observable = null;
    this.state = {
      continentToDisplay: null
    }
  }
  cancelAndSetSelected = (code) => {
    // if the user clicks on the same element again and again, do nothing
    if(this.code === code) {
      return;
    }
    // if the user clicks on another element, check if a fetch request is in progress
    // if yes, then cancel and place a request for the continent with new code
    // if no, then place a request for the continent with new code
    // set this.code to the code of the continent
    let queryOptions = { query: getContinent,
      variables: { code },
      context: { queryDeduplication: false },
    }
    this.code = code;
    let onSuccess = ({continent}) => {
      this.setContinentToDisplay(continent);
    }
    this.props.addObservable(client, queryOptions, onSuccess);
  }

  setContinentToDisplay = (continent) => {
    this.code = null;
    this.setState((prevState) => {
      return { continentToDisplay: continent }
    })
  }

  render() {
    const continent = this.state.continentToDisplay;
    let componentToDisplay;
    if(continent) {
      componentToDisplay = <ContinentDetails continent={continent} />
    }
    else {
      componentToDisplay = <CountriesList client={client}
      setContinentToDisplay={ this.setContinentToDisplay }
      cancelAndSetSelected={ this.cancelAndSetSelected } />
    }
    return (
      <div className="App">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <NavBar setContinentToDisplay={this.setContinentToDisplay} cancelRequest={this.props.cancelRequest} />
          <div className="Main-layout">
            <ApolloProvider client={client}>
              {componentToDisplay}
            </ApolloProvider>
          </div>
        </Container>
      </div>
    )
  }
}

export default withCancellableCall(App);
