import * as api from './api-client.js';
import mapTwitterToLocal from './map-twitter-to-local.js';

export async function index(req, res) {
  const twitterResponse = await api.getListFriendsForCurrentUser(req.params.listId);

  const localResponse = mapTwitterToLocal(twitterResponse);

  res.json(localResponse);
}

export async function addFriendsToList(req, res) {
  const twitterResponse = await api.addFriendsToList(req.params.listId, req.query.friendIds);

  res.json({ listId: req.params.listId, message: 'Friends added to list!'});
}

export async function removeFriendsFromList(req, res) {
  const twitterResponse = await api.removeFriendsFromList(req.params.listId, req.query.friendIds);

  res.json({ listId: req.params.listId, message: 'Friends removed from list!'});
}
