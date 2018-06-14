import { Router } from 'express';
import Actions from './actions';

const router = new Router();
const actions = new Actions();

// GET Methods
router.get('/getUsers', actions.getUsers);

// POST Methods
router.post('/login', actions.login);
router.post('/createUser', actions.createUser);

export default router;
