import { Request, Response } from "express"
import { addMusicInPlaylistBusiness } from "../../business/playlists/addMusicInPlaylistBusiness"
import { addMusicInPlaylistDTO } from "../../model/playlists"


export const addMusicInPlaylist = async (req: Request, res: Response) : Promise<void> => {

    try {

        const token = req.headers.authorization as string

        const { playlistId, musicId } = req.body

        const input: addMusicInPlaylistDTO =  { token, playlistId, musicId }

        await addMusicInPlaylistBusiness(input)

        res.status(200).send({ message: "Música adicionada com sucesso!" })
    }
    catch (error) {

        res.status(400).send({ error: error.message })
    }
}
