export default function(friends, listsWithFriends) {
  return friends.map(friend => {
    return {
      ...friend,
      lists: findAndMapLists(friend, listsWithFriends),
    };
  });
}

function findAndMapLists(friend, listsWithFriends) {
  const listsForFriend = listsWithFriends.filter(
    x => x.friends.includes(friend.id)
  );

  if (!Array.isArray(listsForFriend)) {
    return [];
  }
  return listsForFriend.map(list => list.listId);
}
