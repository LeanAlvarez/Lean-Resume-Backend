import express from "express";

const app = express()


app.get("/Ios", (req,res) => res.send('Obteniendo los proyectos ios'))

app.get("/Ios", (req,res) => res.send('Obteniendo los proyectos ios'))

app.get("/Ios", (req,res) => res.send('Obteniendo los proyectos ios'))


app.listen(3000)
console.log("Server running on port 3000")