import { getFriendsForCurrentUser } from './api-client.js';
import mapTwitterToLocal from './map-twitter-to-local.js';

export async function index(req, res) {
  const twitterResponse = await getFriendsForCurrentUser();

  const localResponse = mapTwitterToLocal(twitterResponse);

  res.json(localResponse);
}
