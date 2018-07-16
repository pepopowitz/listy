import { Router } from 'express';
import * as fakeFriends from './fake-friends';
import * as twitterFriends from './twitter-friends';

function getBackend() {
  if (process.env.APP_BACKEND === 'twitter') { 
    return twitterFriends;
  }
  return fakeFriends;
}

var routes = Router()

const backend = getBackend();
routes.get('/', backend.index);

export default routes;
