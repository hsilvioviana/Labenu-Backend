import { Request, Response } from "express"
import { removeMusicBusiness } from "../../business/musics/removeMusicBusiness"
import { removePostDTO } from "../../model/musics"


export const removeMusic = async (req: Request, res: Response) : Promise<void> => {

    try {

        const token = req.headers.authorization as string

        const id = req.params.id

        const input: removePostDTO = { id, token }

        await removeMusicBusiness(input)

        res.status(200).send({ message: "Música apagada com sucesso"})
    }
    catch (error) {

        res.status(400).send({ error: error.message })
    }
}
