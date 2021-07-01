import { Request, Response } from "express"
import { musicPostBusiness } from "../../business/musics/musicPostBusiness"
import { musicsPostInputDTO } from "../../model/musics"


export const musicPost = async (req: Request, res: Response) : Promise<void> => {

    try {

        const { title, author, releaseDate, file, genres, album } = req.body

        const token = req.headers.authorization as string

        const input: musicsPostInputDTO = { token, title, author, releaseDate, file, genres, album }

        await musicPostBusiness(input)

        res.status(200).send({ message: "Música postada com sucesso!" })
    }
    catch (error) {

        res.status(400).send({ error: error.message })
    }
}