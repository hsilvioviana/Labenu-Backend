import { getMusics } from "../../data/musics/getMusics"
import { post } from "../../model/musics"
import { getTokenData } from "../../services/authenticator"


export const getMusicsBusiness = async (token: string) : Promise<post[]> => {

    try {

        getTokenData(token)

        const posts = await getMusics()

        return posts
    }
    catch(error) {

        throw new Error(error.message)
    }
}
