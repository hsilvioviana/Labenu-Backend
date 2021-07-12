import { Router } from "express"
import { playlistAddMusic } from "../controller/playlists/playlistAddMusic"
import { playlistCreate } from "../controller/playlists/playlistCreate"


export const playlistsRouter = Router()

playlistsRouter.post("/create", playlistCreate)
playlistsRouter.post("/add", playlistAddMusic)
