import {Router} from "express"
const router = Router();

import {create, remove, update, getAll, get} from "../controllers/car.controller"


router.get("/cars", getAll);

router.post("/cars", create);

router.put("/cars/:id", update);

router.delete("/cars/:id", remove);

router.get("/cars/:id", get);


export default router;