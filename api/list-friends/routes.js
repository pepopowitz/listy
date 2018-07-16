import { Router } from 'express';
import * as fakeListFriends from './fake-list-friends';
import * as twitterListFriends from './twitter-list-friends';

function getBackend() {
  if (process.env.APP_BACKEND === 'twitter') { 
    return twitterListFriends;
  }
  return fakeListFriends;
}

var routes = Router({ mergeParams: true });

const backend = getBackend();
routes.get('/', backend.index);
routes.post('/add-many', backend.addFriendsToList);
routes.post('/remove-many', backend.removeFriendsFromList);

export default routes;
