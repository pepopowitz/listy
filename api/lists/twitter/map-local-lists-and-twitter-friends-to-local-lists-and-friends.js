export default function(lists, twitterFriendsInLists) {
  return lists.map(list => {
    return {
      ...list,
      friends: findAndMapFriends(list, twitterFriendsInLists),
    };
  });
}

function findAndMapFriends(list, twitterFriendsInLists) {
  const twitterFriends = twitterFriendsInLists
    .find(x => x.listId === list.id)
    .friends;

  if (!Array.isArray(twitterFriends)) {
    return [];
  }
  return twitterFriends.map(friend => friend.id_str);
}
