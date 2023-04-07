import { Router } from 'express';
import { getSpirits } from '../controllers/spiritController';
const router = Router();


/**
 * Cockatail Routes
 */
router.get('/cocktails', getSpirits);
router.get('/cocktails/:id', (_req, _res) => {});
router.put('/cocktails/:id', (_req, _res) => {});
router.post('/cocktails', (_req, _res) => {});
router.delete('/cocktails/:id', (_req, _res) => {});

export default router;