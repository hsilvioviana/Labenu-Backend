import { getMusic } from "../../data/musics/getMusic"
import { getMusicDTO, post } from "../../model/musics"
import { getTokenData } from "../../services/authenticator"


export const getMusicBusiness = async (input: getMusicDTO) : Promise<post> => {

    try {

        getTokenData(input.token)

        const post: post = await getMusic(input.id)

        if (!post) { throw new Error("Post não encontrado") }

        return post
    }
    catch (error) {

        throw new Error(error.message)
    }
}
