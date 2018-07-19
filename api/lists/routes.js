import { Router } from 'express';
import * as fakeLists from './fake';
import * as twitterLists from './twitter';

function getBackend() {
  if (process.env.APP_BACKEND === 'twitter') { 
    return twitterLists;
  }
  return fakeLists;
}

var routes = Router()

const backend = getBackend();
routes.get('/', backend.index);

export default routes;

