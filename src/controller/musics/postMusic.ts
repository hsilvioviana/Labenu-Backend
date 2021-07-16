import { Request, Response } from "express"
import { postMusicBusiness } from "../../business/musics/postMusicBusiness"
import { postMusicDTO } from "../../model/musics"


export const postMusic = async (req: Request, res: Response) : Promise<void> => {

    try {

        const { title, author, releaseDate, file, genres, album } = req.body

        const token = req.headers.authorization as string

        const input: postMusicDTO = { token, title, author, releaseDate, file, genres, album }

        await postMusicBusiness(input)

        res.status(200).send({ message: "Música postada com sucesso" })
    }
    catch (error) {

        res.status(400).send({ error: error.message })
    }
}
