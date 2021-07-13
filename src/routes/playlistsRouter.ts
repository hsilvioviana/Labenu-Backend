import { Router } from "express"
import { playlistAddOrRemoveMusic } from "../controller/playlists/playlistAddOrRemoveMusic"
import { playlistCreate } from "../controller/playlists/playlistCreate"


export const playlistsRouter = Router()

playlistsRouter.post("/create", playlistCreate)
playlistsRouter.post("/change", playlistAddOrRemoveMusic)
