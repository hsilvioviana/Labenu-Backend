import { Request, Response } from "express"
import { playlistMusicsBusiness } from "../../business/playlists/playlistMusicsBusiness"
import { playlistMusicsDTO } from "../../model/playlists"


export const playlistMusics = async (req: Request, res: Response) : Promise<void> => {

    try {

        const token = req.headers.authorization as string

        const id = req.params.id

        const input: playlistMusicsDTO = { id, token }

        const { title, musics } = await playlistMusicsBusiness(input)

        res.status(200).send({ title, musics })
    }
    catch (error) {

        res.status(400).send({ error: error.message })
    }
}