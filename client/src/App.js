import React, { Component } from 'react'
import {
  ApolloClient,
  gql,
  graphql,
  ApolloProvider,
  createNetworkInterface
} from 'react-apollo'
import logo from './logo.svg'
import './App.css'

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:4000/graphql'
})

const client = new ApolloClient({
  networkInterface
})

const channelsListQuery = gql`
query ChannelsListQuery {
  channels {
    id
    name
  }
}
`

const ChannelsList = ({ data: { loading, error, channels } }) => {
  if (loading) {
    return <div>Loading ...</div>
  }
  if (error) {
    return <div>{error.message}</div>
  }
  return <ul className="item-list">
    { channels.map(channel => <li key={channel.id}>{channel.name}</li>) }
  </ul>
}

const ChannelsListWithData = graphql(channelsListQuery)(ChannelsList)

class App extends Component {
  render () {
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
    )
  }
}
export default App
