import getTwitterClient from '../../junk-drawer/get-twitter-client.js';

export async function getListsForCurrentUser() {
  const client = getTwitterClient();

  return await client.get('lists/list', {});
}