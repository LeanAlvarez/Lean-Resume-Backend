import { Router } from "express";


import { getProyectIos, createProyectIos, updateProyectIos, deleteProyectIos } from "../../../controllers/tecnologias/ios/ios.controllers.js";

const router = Router()

//rutas de los proyectos


router.get("/Ios", getProyectIos )

router.post("/Ios", createProyectIos)

router.put("/Ios", updateProyectIos)

router.delete("/Ios", deleteProyectIos)



export default router