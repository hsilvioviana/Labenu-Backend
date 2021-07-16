import { getMusicsInPlaylist } from "../../data/musics/getMusicsInPlaylist"
import { getPlaylistById } from "../../data/playlists/getPlaylistById"
import { playlistMusics, getPlaylistDTO } from "../../model/playlists"
import { getTokenData } from "../../services/authenticator"


export const getPlaylistBusiness = async (input: getPlaylistDTO) : Promise<playlistMusics> => {

    try {

        getTokenData(input.token)

        if (!input.id) {

            throw new Error("Você deve fornecer: 'id'")
        }

        const playlist = await getPlaylistById(input.id)

        if (!playlist) {

            throw new Error("Playlist não encontrada")
        }

        const musics = await getMusicsInPlaylist(input.id)

        return { title: playlist.title, musics }
    }
    catch (error) {

        throw new Error(error.message)
    }
}
