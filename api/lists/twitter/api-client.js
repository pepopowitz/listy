import getTwitterClient from '../../junk-drawer/get-twitter-client.js';
import { getListFriendsForCurrentUser } from '../../list-friends/twitter/api-client';
import mapTwitterFriendToLocalFriend from '../../list-friends/twitter/map-twitter-to-local';

export async function getListsForCurrentUser() {
  const client = getTwitterClient();

  return await client.get('lists/list', {});
}
