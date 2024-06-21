import express from "express";

import {pool} from './db.js'

const app = express()

app.get("/ping", async(req, res) => {
    const [result] = await pool.query("SELECT 1 + 1 AS result")
    res.json(result[0])
})

app.get("/Ios", (req,res) => res.send('Obteniendo los proyectos ios'))

app.get("/Ios", (req,res) => res.send('Obteniendo los proyectos ios'))

app.get("/Ios", (req,res) => res.send('Obteniendo los proyectos ios'))


app.listen(3000)
console.log("Server running on port 3000")