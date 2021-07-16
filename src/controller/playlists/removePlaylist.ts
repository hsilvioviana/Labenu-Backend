import { Request, Response } from "express"
import { removePlaylistBusiness } from "../../business/playlists/removePlaylistBusiness"
import { removePlaylistDTO } from "../../model/playlists"


export const removePlaylist = async (req: Request, res: Response) : Promise <void> => {

    try {

        const token = req.headers.authorization as string

        const id = req.params.id

        const input: removePlaylistDTO = { id, token }

        await removePlaylistBusiness(input)

        res.status(200).send({ message: "Playlist apagada com sucesso" })
    }
    catch (error) {

        res.status(400).send({ error: error.message })
    }
}
