import { Router } from 'express';
import { index, addFriendsToList, removeFriendsFromList } from './fake-list-friends';

var routes = Router({ mergeParams: true });

// TODO - toggle backend based on APP_BACKEND
routes.get('/', index);
routes.post('/add-many', addFriendsToList);
routes.post('/remove-many', removeFriendsFromList);

export default routes;
