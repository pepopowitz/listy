import getTwitterClient from '../../junk-drawer/get-twitter-client.js';

export async function getFriendsForCurrentUser() {
  const client = getTwitterClient();

  return await client.get('friends/list', {
    count: 200,
    // we don't need these things:
    skip_status: true,
    include_user_entities: false,
  });
}

export async function getListsForCurrentUser() {
  const client = getTwitterClient();

  return await client.get('lists/list', {});
}

export async function getFriendsInList(listId) {
  const client = getTwitterClient();

  const friends = await client.get('lists/members', {
    list_id: listId,
    count: 1000,
  });

  return {
    listId,
    friends: friends.users,
  };
}
