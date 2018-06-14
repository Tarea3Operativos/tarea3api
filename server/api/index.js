import { Router } from 'express';

const router = new Router();

// API endpoints.
router.use('/repoUsers', require('./repoUsers').default);

// End

export default router;
