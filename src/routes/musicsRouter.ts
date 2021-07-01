import { Router } from "express"
import { musicPost } from "../controller/musics/musicPost"


export const musicsRouter = Router()

musicsRouter.post("/post", musicPost)
