import { deletePlaylist } from "../../data/playlists/deletePlaylist";
import { getPlaylistById } from "../../data/playlists/getPlaylistById";
import { playlistDeleteDTO } from "../../model/playlists";
import { getTokenData } from "../../services/authenticator";


export const playlistDeleteBusiness = async (input: playlistDeleteDTO) : Promise<void> => {

    try {

        const user = getTokenData(input.token)

        if (!input.id) {

            throw new Error("Você deve fornecer: 'id'")
        }

        const playlist = await getPlaylistById(input.id)

        if (!playlist) {

            throw new Error("Playlist não encontrada")
        }

        if (user.id !== playlist.creatorId) {

            throw new Error("Você não pode deletar uma playlist que não é sua")
        }

        await deletePlaylist(input.id)
    }
    catch (error) {

        throw new Error(error.message)
    }
}