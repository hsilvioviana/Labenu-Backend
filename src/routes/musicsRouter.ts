import { Router } from "express"
import { musicPost } from "../controller/musics/musicPost"
import { musicsList } from "../controller/musics/musicsList"


export const musicsRouter = Router()

musicsRouter.get("/", musicsList)
musicsRouter.post("/post", musicPost)
