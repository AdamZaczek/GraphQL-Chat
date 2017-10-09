
const channels = [
  {
    id: 1,
    name: 'skateboarding',
  }, {
    id: 2,
    name: 'programming',
  }, {
    id: 3,
    name: 'watching youtube',
  }
];

export const resolvers = {
  Query: {
    channels: () => {
      return channels;
    },
  },
};