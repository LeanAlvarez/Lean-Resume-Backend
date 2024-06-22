import express from "express";

import iosRouter from "./routes/tecnologias/Ios/ios.routes.js";
import androidRouter from "./routes/tecnologias/Android/android.routes.js"
import backendRouter from "./routes/tecnologias/Backend/backend.routes.js"
import indexRouter from "./routes/otros/index.routes.js"

const app = express()


app.use(indexRouter)
app.use(iosRouter)
app.use(androidRouter)
app.use(backendRouter)



app.listen(3000)
console.log("Server running on port 3000")