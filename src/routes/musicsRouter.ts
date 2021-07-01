import { Router } from "express"
import { getMusic } from "../controller/musics/getMusic"
import { musicPost } from "../controller/musics/musicPost"
import { musicsList } from "../controller/musics/musicsList"


export const musicsRouter = Router()

musicsRouter.get("/", musicsList)
musicsRouter.get("/:id", getMusic)
musicsRouter.post("/post", musicPost)
