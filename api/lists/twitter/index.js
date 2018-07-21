import { getListsForCurrentUser, getFriendsForList } from './api-client.js';
import mapTwitterListsToLocalLists from './map-twitter-lists-to-local-lists.js';
import mapLocalListsAndTwitterFriendsToLocalListsAndFriends from './map-local-lists-and-twitter-friends-to-local-lists-and-friends.js';

export async function index(req, res) {
  const twitterLists = await getListsForCurrentUser();
  const localLists = mapTwitterListsToLocalLists(twitterLists);
  
  const friendsInListsRequests = localLists.map(list => getFriendsForList(list));

  const twitterFriendsInLists = await Promise.all(friendsInListsRequests);
  
  const localListsWithFriends = mapLocalListsAndTwitterFriendsToLocalListsAndFriends(localLists, twitterFriendsInLists);

  res.json(localListsWithFriends);
}
