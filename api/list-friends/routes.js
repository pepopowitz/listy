import { Router } from 'express';
import * as fakeListFriends from './fake';
import * as twitterListFriends from './twitter';

function getBackend() {
  if (process.env.APP_BACKEND === 'twitter') { 
    return twitterListFriends;
  }
  return fakeListFriends;
}

var routes = Router({ mergeParams: true });

const backend = getBackend();
routes.get('/', backend.index);
routes.post('/add', backend.addFriendToList);
routes.post('/remove', backend.removeFriendFromList);
// TODO - not using these anymore. clean up.
routes.post('/add-many', backend.addFriendsToList);
routes.post('/remove-many', backend.removeFriendsFromList);

export default routes;
