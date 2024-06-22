
import { Router } from "express";
import {indexController} from "../../controllers/otros/index.controllers.js";

const router = Router()

//rutas de los proyectos

router.get("/ping", indexController)



export default router