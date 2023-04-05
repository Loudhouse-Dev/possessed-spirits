import { Router } from 'express';

const router = Router();


/**
 * Cockatail Routes
 */
router.get('/cocktails', (_req, res) => {});
router.get('/cocktails/:id', (_req, res) => {});
router.put('/cocktails/:id', (_req, res) => {});
router.post('/cocktails', (_req, res) => {});
router.delete('/cocktails/:id', (_req, res) => {});

export default router;