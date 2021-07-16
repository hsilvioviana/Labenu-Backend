import { Request, Response } from "express"
import { removeMusicInPlaylistBusiness } from "../../business/playlists/removeMusicInPlaylistBusiness"
import { removeMusicInPlaylistDTO } from "../../model/playlists"


export const removeMusicInPlaylist = async (req: Request, res: Response) : Promise<void> => {

    try {

        const token = req.headers.authorization as string

        const { playlistId, musicId } = req.body

        const input: removeMusicInPlaylistDTO =  { token, playlistId, musicId }

        await removeMusicInPlaylistBusiness(input)

        res.status(200).send({ message: "Música removida com sucesso!" })
    }
    catch (error) {

        res.status(400).send({ error: error.message })
    }
}
