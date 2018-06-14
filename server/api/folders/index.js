import { Router } from 'express';
import Actions from './actions';

const router = new Router();
const actions = new Actions();

// GET Methods
router.get('/foldersByUser/:id', actions.foldersByUser);
router.get('/validatePermission/name/_id', actions.validatePermission);

// POST Methods
router.post('/addFolder', actions.addFolder);

export default router;
