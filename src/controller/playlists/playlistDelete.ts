import { Request, Response } from "express"
import { playlistDeleteBusiness } from "../../business/playlists/playlistDeleteBusiness"
import { playlistDeleteDTO } from "../../model/playlists"


export const playlistDelete = async (req: Request, res: Response) : Promise <void> => {

    try {

        const token = req.headers.authorization as string

        const id = req.params.id

        const input: playlistDeleteDTO = { id, token }

        await playlistDeleteBusiness(input)

        res.status(200).send({ message: "Playlist apagada com sucesso!" })
    }
    catch (error) {

        res.status(400).send({ error: error.message })
    }
}