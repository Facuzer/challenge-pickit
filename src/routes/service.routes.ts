import {Router} from "express"
const router = Router();

import { getAll } from "../controllers/service.controller";

router.get("/services", getAll);

export default router;