import { Router } from 'express';
import { index } from './fake-friends';

var routes = Router()

// TODO - toggle backend based on APP_BACKEND
routes.get('/', index);

export default routes;
