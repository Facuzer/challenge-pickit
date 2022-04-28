import {Router} from "express"
const router = Router();

import {create, getAll, getByCar} from "../controllers/transaction.controller";

router.post("/transactions", create);
router.get("/transactions", getAll);
router.get("/transactions/:id", getByCar)

export default router;