import { Router } from 'express';
import Actions from './actions';

const router = new Router();
const actions = new Actions();

// GET Methods
router.get('/commitsByFolderAndUser/:folderName/:repoUserId', actions.commitsByFolderAndUser);

// POST Methods
router.post('/addCommit', actions.addCommit);

export default router;
