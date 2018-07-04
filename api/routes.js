import { Router } from 'express';
import friendsRoutes from './friends/routes.js';
import listsRoutes from './lists/routes.js';
import listFriendsRoutes from './list-friends/routes.js';

var router = Router()

router.use('/lists', listsRoutes);
router.use('/friends', friendsRoutes);
router.use('/lists/:listId/friends', listFriendsRoutes);

export default router;
