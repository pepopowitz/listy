import { getListsForCurrentUser, getFriendsForList } from './api-client.js';
import mapTwitterListsToLocalLists from './map-twitter-lists-to-local-lists.js';
import mapLocalListsAndTwitterFriendsToLocalListsAndFriends from './map-local-lists-and-twitter-friends-to-local-lists-and-friends.js';

export async function index(req, res) {
  const twitterResponse = await getListsForCurrentUser();

  const localResponse = mapTwitterListsToLocalLists(twitterResponse);

  res.json(localResponse);
}

export async function detail(req, res) {
  throw new Error('not implemented yet: lists/twitter/detail');
}

export async function create(req, res) {
  throw new Error('not implemented yet: lists/twitter/create');
}

export async function update(req, res) {
  throw new Error('not implemented yet: lists/twitter/edit');
}