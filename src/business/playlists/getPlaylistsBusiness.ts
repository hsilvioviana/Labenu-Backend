import { getPlaylists } from "../../data/playlists/getPlaylists"
import { playlist } from "../../model/playlists"
import { getTokenData } from "../../services/authenticator"


export const getPlaylistsBusiness = async (token: string) : Promise<playlist[]> => {

    try {

        const user = getTokenData(token)

        const playlists = await getPlaylists(user.id)

        return playlists
    }
    catch (error) {

        throw new Error(error.message)
    }
}
