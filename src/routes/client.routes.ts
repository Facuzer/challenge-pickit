import {Router} from "express"
const router = Router();

import { create, getAll } from "../controllers/client.controller";

router.post("/clients", create);
router.get("/clients", getAll);

export default router;