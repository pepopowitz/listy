import getTwitterClient from '../../junk-drawer/get-twitter-client.js';

export async function getListFriendsForCurrentUser(listId) {
  const client = getTwitterClient();

  return await client.get('lists/members', { list_id: listId, count: 1000 });
}

export async function addFriendsToList(listId, friendIds) {
  const client = getTwitterClient();

  return client.post('lists/members/create_all', {
    screen_name: friendIds,
    list_id: listId,
  });
}

export async function removeFriendsFromList(listId, friendIds) {
  const client = getTwitterClient();

  return client.post('lists/members/destroy_all', {
    screen_name: friendIds,
    list_id: listId,
  });
}
