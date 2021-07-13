import { Request, Response } from "express"
import { playlistAddOrRemoveMusicBusiness } from "../../business/playlists/playlistAddOrRemoveMusicBusiness"
import { playlistAddOrRemoveMusicInputDTO } from "../../model/playlists"


export const playlistAddOrRemoveMusic = async (req: Request, res: Response) : Promise<void> => {

    try {

        const token = req.headers.authorization as string

        const { playlistId, musicId } = req.body

        const input: playlistAddOrRemoveMusicInputDTO =  {token, playlistId, musicId }

        const message = await playlistAddOrRemoveMusicBusiness(input)

        res.status(200).send({ message })
    }
    catch (error) {

        res.status(400).send({ error: error.message })
    }
}