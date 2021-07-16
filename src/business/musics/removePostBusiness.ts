import { getMusicById } from "../../data/musics/getMusicById"
import { removePost } from "../../data/musics/removePost"
import { removePostDTO } from "../../model/musics"
import { getTokenData } from "../../services/authenticator"


export const removePostBusiness = async (input: removePostDTO) : Promise<void> => {

    try {

        const user = getTokenData(input.token)

        const music = await getMusicById(input.id)

        if (!music) {

            throw new Error("Música não encontrada")
        }

        if (user.role !== "ADMIN" && user.id !== music.postedBy.id) {

            throw new Error("Você não pode deletar o post de outra pessoa")
        }

        await removePost(input.id)
    }
    catch (error) {
        
        throw new Error(error.message)
    }
}