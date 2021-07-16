import { Request, Response } from "express"
import { getPlaylistBusiness } from "../../business/playlists/getPlaylistBusiness"
import { getPlaylistDTO } from "../../model/playlists"


export const getPlaylist = async (req: Request, res: Response) : Promise<void> => {

    try {

        const token = req.headers.authorization as string

        const id = req.params.id

        const input: getPlaylistDTO = { id, token }

        const { title, musics } = await getPlaylistBusiness(input)

        res.status(200).send({ title, musics })
    }
    catch (error) {

        res.status(400).send({ error: error.message })
    }
}
