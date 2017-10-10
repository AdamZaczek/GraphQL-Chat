
const channels = [
  {
    id: 1,
    name: 'skateboarding'
  }, {
    id: 2,
    name: 'programming'
  }, {
    id: 3,
    name: 'watching youtube'
  }
]

// I really need to decide which database to use, this is madness
let nextId = 3

export const resolvers = {
  Query: {
    channels: () => {
      return channels
    }
  },
  Mutation: {
    addChannel: (root, args) => {
      const newChannel = { id: nextId++, name: args.name }
      channels.push(newChannel)
      return newChannel
    }
  }
}
