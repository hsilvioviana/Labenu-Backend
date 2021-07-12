import { Router } from "express"
import { playlistCreate } from "../controller/playlists/playlistCreate"


export const playlistsRouter = Router()

playlistsRouter.get("/create", playlistCreate)
