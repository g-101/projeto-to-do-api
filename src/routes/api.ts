import { Router } from 'express';

import * as ApiController from '../controllers/apiController';

const router = Router();

router.post("/todo", ApiController.all);
router.get("/todo", ApiController.add);
router.put("/todo/:id", ApiController.update);
router.delete("/todo/:id", ApiController.remove);

export default router;