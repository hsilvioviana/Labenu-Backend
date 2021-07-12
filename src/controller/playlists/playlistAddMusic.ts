import { Request, Response } from "express"
import { playlistAddMusicBusiness } from "../../business/playlists/playlistAddMusicBusiness"
import { playlistAddMusicInputDTO } from "../../model/playlists"


export const playlistAddMusic = async (req: Request, res: Response) : Promise<void> => {

    try {

        const token = req.headers.authorization as string

        const { playlistId, musicId } = req.body

        const input: playlistAddMusicInputDTO =  {token, playlistId, musicId }

        await playlistAddMusicBusiness(input)

        res.status(200).send({ message: "Música adicionada com sucesso" })
    }
    catch (error) {

        res.status(400).send({ error: error.message })
    }
}