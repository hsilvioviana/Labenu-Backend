import { Router } from "express"
import { getPlaylists } from "../controller/playlists/getPlaylists"
import { playlistAddMusic } from "../controller/playlists/playlistAddMusic"
import { playlistRemoveMusic } from "../controller/playlists/playlistRemoveMusic"
import { playlistCreate } from "../controller/playlists/playlistCreate"
import { playlistDelete } from "../controller/playlists/playlistDelete"
import { playlistMusics } from "../controller/playlists/playlistMusics"


export const playlistsRouter = Router()

playlistsRouter.get("/", getPlaylists)
playlistsRouter.get("/:id", playlistMusics)
playlistsRouter.post("/create", playlistCreate)
playlistsRouter.post("/add", playlistAddMusic)
playlistsRouter.post("/remove", playlistRemoveMusic)
playlistsRouter.delete("/remove/:id", playlistDelete)

