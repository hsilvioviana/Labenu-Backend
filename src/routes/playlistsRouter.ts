import { Router } from "express"
import { getPlaylists } from "../controller/playlists/getPlaylists"
import { addMusicInPlaylist } from "../controller/playlists/addMusicInPlaylist"
import { removeMusicInPlaylist } from "../controller/playlists/removeMusicInPlaylist"
import { createPlaylist } from "../controller/playlists/createPlaylist"
import { removePlaylist } from "../controller/playlists/removePlaylist"
import { getPlaylist } from "../controller/playlists/getPlaylist"


export const playlistsRouter = Router()

playlistsRouter.get("/", getPlaylists)
playlistsRouter.get("/:id", getPlaylist)
playlistsRouter.post("/create", createPlaylist)
playlistsRouter.post("/add", addMusicInPlaylist)
playlistsRouter.post("/remove", removeMusicInPlaylist)
playlistsRouter.delete("/remove/:id", removePlaylist)
