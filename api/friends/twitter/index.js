import {
  getFriendsForCurrentUser,
  getListsForCurrentUser,
  getFriendsInList,
} from './api-client.js';
import mapTwitterFriendsToLocalFriends from './map-twitter-friends-to-local-friends.js';
import mapFriendsAndListsToFriendsWithEmbeddedLists from './map-friends-and-lists-to-friends-with-embedded-lists.js';
import mapTwitterFriendsInListsToLocalFriendsInLists from './map-twitter-friends-in-lists-to-local-friends-in-lists.js';

export async function index(req, res) {
  const [friends, lists] = await Promise.all([getFriends(), getLists()]);

  const friendsInLists = await getFriendsInLists(lists);

  const friendsWithEmbeddedLists = mapFriendsAndListsToFriendsWithEmbeddedLists(
    friends,
    friendsInLists
  );

  res.json(friendsWithEmbeddedLists);
}

export async function detail(req, res) {
  throw new Error('not implemented yet: friends/twitter/detail');
}

async function getFriends() {
  const twitterResponse = await getFriendsForCurrentUser();

  return mapTwitterFriendsToLocalFriends(twitterResponse);
}

async function getLists() {
  const twitterLists = await getListsForCurrentUser();

  return twitterLists;
}

async function getFriendsInLists(lists) {
  const friendsInListsRequests = lists.map(list =>
    getFriendsInList(list.id_str)
  );

  const friendsInLists = await Promise.all(friendsInListsRequests);

  return mapTwitterFriendsInListsToLocalFriendsInLists(friendsInLists);
}
