import { Router } from "express"
import { getMusic } from "../controller/musics/getMusic"
import { postMusic } from "../controller/musics/postMusic"
import { getMusics } from "../controller/musics/getMusics"
import { removeMusic } from "../controller/musics/removeMusic"


export const musicsRouter = Router()

musicsRouter.get("/", getMusics)
musicsRouter.get("/:id", getMusic)
musicsRouter.post("/post", postMusic)
musicsRouter.delete("/remove/:id", removeMusic)
