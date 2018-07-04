import { Router } from 'express';
import { index } from './fake-friends';

var routes = Router()

routes.get('/', index);

export default routes;
