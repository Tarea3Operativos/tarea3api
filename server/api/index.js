import { Router } from 'express';

const router = new Router();

// API endpoints.
router.use('/repoUsers', require('./repoUsers').default);
router.use('/folders', require('./folders').default);
router.use('/commits', require('./commits').default);

// End

export default router;
