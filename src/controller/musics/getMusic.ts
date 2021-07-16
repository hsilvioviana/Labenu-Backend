import { Request, Response } from "express"
import { getMusicBusiness } from "../../business/musics/getMusicBusiness"
import { getMusicDTO, post } from "../../model/musics"


export const getMusic = async (req: Request, res: Response) : Promise<void> => {

    try {

        const token = req.headers.authorization as string

        const id = req.params.id

        const input: getMusicDTO = { token, id }

        const post: post = await getMusicBusiness(input)

        res.status(200).send( { post })
    }
    catch (error) {

        res.status(400).send({ error: error.message })
    }
}
