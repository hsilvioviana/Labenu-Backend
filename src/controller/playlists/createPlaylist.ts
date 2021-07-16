import { Request, Response } from "express"
import { createPlaylistBusiness } from "../../business/playlists/createPlaylistBusiness"
import { createPlaylistDTO } from "../../model/playlists"


export const createPlaylist = async (req: Request, res: Response) : Promise<void> => {

    try {

        const token = req.headers.authorization as string

        const title = req.body.title

        const input: createPlaylistDTO = { token, title }

        await createPlaylistBusiness(input)

        res.status(200).send({ message: "Playlist criada com sucesso!" })
    }
    catch (error) {

        res.status(400).send({ error: error.message })
    }
}
