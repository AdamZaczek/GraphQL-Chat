import React from 'react'
import {
  graphql,
  gql } from 'react-apollo'

import AddChannelWithMutation from './AddChannelWithMutation'

export const channelsListQuery = gql`
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
    <AddChannelWithMutation />
    { channels.map(channel => <li key={channel.id}>{channel.name}</li>) }
  </ul>
}

const ChannelsListWithData = graphql(channelsListQuery)(ChannelsList)

export default graphql(channelsListQuery, {
  options: { pollInterval: 5000 }
})(ChannelsList)
