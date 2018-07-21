export default function(friends) {
  return friends.map(friend => {
    return {
      ...friend,
      lists: [
        {
          id: '1',
          selected: false,
        },
        {
          id: '2',
          selected: true,
        },
        {
          id: '3',
          selected: false,
        },
      ]
    }
  });
}