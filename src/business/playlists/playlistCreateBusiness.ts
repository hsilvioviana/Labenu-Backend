import { createPlaylist } from "../../data/playlists/createPlaylist";
import { playlistCreateInputDTO, playlistCreator } from "../../model/playlists";
import { getTokenData } from "../../services/authenticator";
import { generateId } from "../../services/idGenerator";


export const playlistCreateBusiness = async (input: playlistCreateInputDTO) : Promise<void> => {

    try {

        const user = getTokenData(input.token)

        if (!input.title) {

            throw new Error("Você deve fornecer um 'title'")
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