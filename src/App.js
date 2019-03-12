import React, { Component } from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import { ApolloConsumer, ApolloProvider, Query } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:4000/'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <h1>Hello World!</h1>
        <Query 
          query={gql`
                  {
                    recipes {
                      id
                      title
                    }
                  }
                `}>
            {({data}) => {
              if (data.recipes === undefined) return null;

              return (
                <ul>
                  {data.recipes.map(
                    ({id, title}) => <li key={id}>{title}</li>
                  )}
                </ul>
              )
            }}
          </Query>
      </ApolloProvider>
    );
  }
}

export default App;
