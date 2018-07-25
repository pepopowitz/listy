import getTwitterClient from '../../junk-drawer/get-twitter-client.js';

export async function addFriendToList(listId, friendId) {
  const client = getTwitterClient();

  return client.post('lists/members/create', {
    user_id: friendId,
    list_id: listId,
  });
}

export async function removeFriendFromList(listId, friendId) {
  const client = getTwitterClient();

  return client.post('lists/members/destroy', {
    user_id: friendId,
    list_id: listId,
  });
}

// todo - remove?
export async function addFriendsToList(listId, friendIds) {
  const client = getTwitterClient();

  return client.post('lists/members/create_all', {
    user_id: friendIds,
    list_id: listId,
  });
}

export async function removeFriendsFromList(listId, friendIds) {
  const client = getTwitterClient();

  return client.post('lists/members/destroy_all', {
    user_id: friendIds,
    list_id: listId,
  });
}
