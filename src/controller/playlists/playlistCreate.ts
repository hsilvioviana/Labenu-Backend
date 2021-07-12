import { Request, Response } from "express"
import { playlistCreateBusiness } from "../../business/playlists/playlistCreateBusiness"


export const playlistCreate = async (req: Request, res: Response) : Promise<void> => {

    try {

        const token = req.headers.authorization as string

        const title = req.body.title

        const input = { token, title }

        await playlistCreateBusiness(input)

        res.status(200).send({ message: "Playlist criada com sucesso!" })
    }
    catch (error) {

        res.status(400).send({ error: error.message })
    }
}