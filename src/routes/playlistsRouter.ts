import { Router } from "express"
import { getPlaylists } from "../controller/playlists/getPlaylists"
import { playlistAddOrRemoveMusic } from "../controller/playlists/playlistAddOrRemoveMusic"
import { playlistCreate } from "../controller/playlists/playlistCreate"
import { playlistMusics } from "../controller/playlists/playlistMusics"


export const playlistsRouter = Router()

playlistsRouter.get("/", getPlaylists)
playlistsRouter.get("/:id", playlistMusics)
playlistsRouter.post("/create", playlistCreate)
playlistsRouter.post("/change", playlistAddOrRemoveMusic)
