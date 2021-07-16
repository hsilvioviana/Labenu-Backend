import { Request, Response } from "express"
import { getMusicsBusiness } from "../../business/musics/getMusicsBusiness"
import { post } from "../../model/musics"


export const getMusics = async (req: Request, res: Response) : Promise<void> => {

    try {

        const token = req.headers.authorization as string

        const posts: post[] = await getMusicsBusiness(token)

        res.status(200).send({ posts })
    }
    catch(error) {

        res.status(400).send({ error: error.message })
    }
}
