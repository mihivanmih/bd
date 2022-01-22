import express from "express"
import UserRouter from "./routes/user.routes.js"
import PostRouter from "./routes/post.routes.js"

const PORT = process.env.PORT || 8000

const app = express()

app.use(express.json())
app.use('/api', UserRouter)
app.use('/api', PostRouter)

app.listen(PORT, () => console.log("Сервер запущен"))

