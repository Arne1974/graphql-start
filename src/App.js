import React, { Component } from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import { ApolloConsumer, ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:4000/'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <h1>Hello World!</h1>
        <ApolloConsumer>
          {client => {
            client
              .query({
                query: gql`
                  {
                    recipes {
                      id
                      title
                    }
                  }
                `
              })
              .then(result => console.log(result));
              return null;
          }}
        </ApolloConsumer>
      </ApolloProvider>
    );
  }
}

export default App;
