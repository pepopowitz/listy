import getTwitterClient from '../../junk-drawer/get-twitter-client.js';

export async function getFriendsForCurrentUser() {
  const client = getTwitterClient();

  return await client.get('friends/list', { count: 200 });
}
