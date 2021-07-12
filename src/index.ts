import { app } from "./controller/app"
import { musicsRouter } from "./routes/musicsRouter"
import { playlistsRouter } from "./routes/playlistsRouter"
import { usersRouter } from "./routes/usersRouter"


app.use("/users", usersRouter)
app.use("/musics", musicsRouter)
app.use("/playlists", playlistsRouter)