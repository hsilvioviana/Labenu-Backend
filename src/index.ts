import { app } from "./controller/app"
import { musicsRouter } from "./routes/musicsRouter"
import { usersRouter } from "./routes/usersRouter"


app.use("/users", usersRouter)
app.use("/musics", musicsRouter)