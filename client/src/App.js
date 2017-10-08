import React, { Component } from 'react';
import {
  ApolloClient,
  gql,
  graphql,
  ApolloProvider,
} from 'react-apollo';
import { 
  makeExecutableSchema,
  addMockFunctionsToSchema
} from 'graphql-tools';
 import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils';
 import { typeDefs } from './schema';
import logo from './logo.svg';
import './App.css';

const schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ schema });
const mockNetworkInterface = mockNetworkInterfaceWithSchema({ schema });
const client = new ApolloClient({
  networkInterface: mockNetworkInterface,
});
const channelsListQuery = gql`
query ChannelsListQuery {
  channels {
    id
    name
  }
}
`;

const ChannelsList = ({ data: {loading, error, channels }}) => {
  if (loading) {
    return <div>Loading ...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return <ul className="item-list">
    { channels.map( channel => <li key={channel.id}>{channel.name}</li> ) }
  </ul>;
};

const ChannelsListWithData = graphql(channelsListQuery)(ChannelsList);

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="app">
          <div className="app-header">
            <img src={logo} className="app-logo" alt="logo" />
            <h2>Chat App</h2>
          </div>
          <ChannelsListWithData />
        </div>
      </ApolloProvider>
    );
  }
}
export default App;
