import { getMusicById } from "../../data/musics/getMusicById";
import { musicAlreadyInPlaylist } from "../../data/musics/musicAlreadyInPlaylist";
import { addMusicInPlaylist } from "../../data/playlists/addMusicInPlaylist";
import { getPlaylistById } from "../../data/playlists/getPlaylistById";
import { removeMusicInPlaylist } from "../../data/playlists/removeMusicInPlaylist";
import { playlistAddOrRemoveMusicInputDTO } from "../../model/playlists";
import { getTokenData } from "../../services/authenticator";


export const playlistAddOrRemoveMusicBusiness = async (input: playlistAddOrRemoveMusicInputDTO) : Promise<string> => {

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

        if (!await musicAlreadyInPlaylist(input)) {

            await addMusicInPlaylist(input)
            
            return "Música adicionada com sucesso"
        }
        else {

            await removeMusicInPlaylist(input)
            
            return "Música removida com sucesso"
        }
    }
    catch (error) {

        throw new Error(error.message)
    }
}