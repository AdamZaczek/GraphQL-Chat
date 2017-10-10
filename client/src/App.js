import React, { Component } from 'react'
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface
} from 'react-apollo'

import ChannelsListWithData from './components/ChannelsListWithData'
import logo from './logo.svg'
import './App.css'

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:4000/graphql'
})

const client = new ApolloClient({
  networkInterface
})

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
