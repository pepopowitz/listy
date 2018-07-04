import { Router } from 'express';
import { index } from './fake-lists';

var routes = Router()

routes.get('/', index);

export default routes;
