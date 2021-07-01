import { Request, Response } from "express"
import { musicsListBusiness } from "../../business/musics/musicsListBusiness"
import { post } from "../../model/musics"


export const musicsList = async (req: Request, res: Response) : Promise<void> => {

    try {

        const token = req.headers.authorization as string

        const posts: post[] = await musicsListBusiness(token)

        res.status(200).send({ posts })
    }
    catch(error) {

        res.status(400).send({ error: error.message })
    }
}