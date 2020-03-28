import { Router } from 'express';

import OngsController from './app/controllers/OngsController';
import IncidentController from './app/controllers/IncidentController';
import ProfileController from './app/controllers/ProfileController';
import SessionController from './app/controllers/SessionController';

const routes = Router();

routes.post('/sessions', SessionController.stor);

routes.get('/ongs', OngsController.index);
routes.post('/ongs', OngsController.stor);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.stor);
routes.delete('/incidents/:id', IncidentController.delete);

export default routes;
