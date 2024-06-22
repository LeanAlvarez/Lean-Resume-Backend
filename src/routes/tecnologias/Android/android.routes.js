import { Router } from "express";

const router = Router()

import {getProyectAndroid, createProyectAndroid, updateProyectAndroid, deleteProyectAndroid} from "../../../controllers/tecnologias/android/android.controllers.js"

//rutas de los proyectos


router.get("/android", getProyectAndroid)

router.post("/android", createProyectAndroid)

router.put("/android", updateProyectAndroid)

router.delete("/android", deleteProyectAndroid)



export default router