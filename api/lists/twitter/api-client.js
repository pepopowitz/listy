import getTwitterClient from '../../junk-drawer/get-twitter-client.js';
import { getListFriendsForCurrentUser } from '../../list-friends/twitter/api-client';
import mapTwitterFriendToLocalFriend from '../../list-friends/twitter/map-twitter-to-local';

export async function getListsForCurrentUser() {
  const client = getTwitterClient();

  return await client.get('lists/list', {});
}

export async function getFriendsForList(list) {
  const client = getTwitterClient();

  const friends = await client.get('lists/members', {
    list_id: list.id,
    count: 1000,
  });
  
  return {
    listId: list.id,
    friends: friends.users,
  };
}
