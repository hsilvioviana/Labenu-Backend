import { createPlaylist } from "../../data/playlists/createPlaylist"
import { createPlaylistDTO, playlistCreator } from "../../model/playlists"
import { getTokenData } from "../../services/authenticator"
import { generateId } from "../../services/idGenerator"


export const createPlaylistBusiness = async (input: createPlaylistDTO) : Promise<void> => {

    try {

        const user = getTokenData(input.token)

        if (!input.title) {

            throw new Error("Você deve fornecer: 'title'")
        }

        const playlistCreator: playlistCreator = {
            id: generateId(),
            userId: user.id,
            title: input.title
        }

        await createPlaylist(playlistCreator)
    }
    catch (error) {

        throw new Error(error.message)
    }
}
