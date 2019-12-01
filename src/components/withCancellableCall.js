import React from 'react';
// this HOC provides cancellableCall ability,
// seperated this out, inorder to make it more reusable
const withCancellableCall = WrappedComponent => {
  class WithCancellableCall extends React.Component {
    constructor (props){
      super(props);
      this.observable = null;
    }

    cancelRequest = () => {
      if(this.observable) {
        this.observable.unsubscribe();
        this.observable = null;
      }
    }

    addObservable = (client, queryOptions, onSuccess) => {
      this.cancelRequest();
      const query = client.watchQuery(queryOptions);
      const observable = query.subscribe(({data}) => {
        onSuccess(data);
      })
      this.observable = observable;
    }
    render () {
      return ( <WrappedComponent
        observable={this.observable}
        addObservable={this.addObservable}
        cancelRequest={this.cancelRequest}
        {... this.props}
      /> )
    }
  }
  return WithCancellableCall;
}

export default withCancellableCall;