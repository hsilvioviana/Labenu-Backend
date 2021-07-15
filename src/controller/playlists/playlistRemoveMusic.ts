import { Request, Response } from "express"
import { playlistRemoveMusicBusiness } from "../../business/playlists/playlistRemoveMusicBusiness"
import { playlistRemoveMusicInputDTO } from "../../model/playlists"


export const playlistRemoveMusic = async (req: Request, res: Response) : Promise<void> => {

    try {

        const token = req.headers.authorization as string

        const { playlistId, musicId } = req.body

        const input: playlistRemoveMusicInputDTO =  { token, playlistId, musicId }

        await playlistRemoveMusicBusiness(input)

        res.status(200).send({ message: "Música removida com sucesso!" })
    }
    catch (error) {

        res.status(400).send({ error: error.message })
    }
}