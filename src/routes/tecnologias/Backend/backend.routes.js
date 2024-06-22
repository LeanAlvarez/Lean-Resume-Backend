import { Router } from "express";

const router = Router()

import {getProyectBackend,createProyectBackend, updateProyectBackend,deleteProyectBackend} from "../../../controllers/tecnologias/backend/backend.controllers.js"

//rutas de los proyectos


router.get("/backend", getProyectBackend)

router.post("/backend", createProyectBackend)

router.put("/backend",updateProyectBackend)

router.delete("/backend", deleteProyectBackend)



export default router