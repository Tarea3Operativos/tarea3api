import { Router } from 'express';
import Actions from './actions';

const router = new Router();
const actions = new Actions();

// GET Methods
router.get('/foldersByUser/:id', actions.foldersByUser);
router.get('/getFolders', actions.getFolders);
router.get('/validatePermission/:name/:username', actions.validatePermission);

// POST Methods
router.post('/addFolder', actions.addFolder);

export default router;
