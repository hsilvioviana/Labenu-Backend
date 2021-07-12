import { getMusicById } from "../../data/musics/getMusicById";
import { musicAlreadyInPlaylist } from "../../data/musics/musicAlreadyInPlaylist";
import { addMusicInPlaylist } from "../../data/playlists/addMusicInPlaylist";
import { getPlaylistById } from "../../data/playlists/getPlaylistById";
import { playlistAddMusicInputDTO } from "../../model/playlists";
import { getTokenData } from "../../services/authenticator";


export const playlistAddMusicBusiness = async (input: playlistAddMusicInputDTO) : Promise<void> => {

    try {

        const user = getTokenData(input.token)

        if (!input.playlistId || !input.musicId) {

            throw new Error("Você deve fornecer: 'playlistId' e 'musicId'")
        }

        const playlist = await getPlaylistById(input.playlistId)

        if (!playlist) {

            throw new Error("Playlist não encontrada")
        }

        const music = await getMusicById(input.musicId)

        if (!music) {

            throw new Error("Música não encontrada")
        }

        if (playlist.creatorId !== user.id) {

            throw new Error("Você não pode mexer em playlists de outras pessoas")
        }

        if (await musicAlreadyInPlaylist(input)) {

            throw new Error("Essa música já está em sua playlist")
        }

        await addMusicInPlaylist(input)
    }
    catch (error) {

        throw new Error(error.message)
    }
}