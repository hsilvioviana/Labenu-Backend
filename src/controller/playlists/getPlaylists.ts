import { Request, Response } from "express"
import { getPlaylistsBusiness } from "../../business/playlists/getPlaylistsBusiness"


export const getPlaylists = async (req: Request, res: Response) : Promise<void> => {

    try {

        const token = req.headers.authorization as string

        const playlists = await getPlaylistsBusiness(token)

        res.status(200).send({ playlists })
    }
    catch (error) {

        res.status(400).send({ error: error.message })
    }
}
