import { getMusicById } from "../../data/musics/getMusicById"
import { musicAlreadyInPlaylist } from "../../data/musics/musicAlreadyInPlaylist"
import { addMusicInPlaylist } from "../../data/playlists/addMusicInPlaylist"
import { getPlaylistById } from "../../data/playlists/getPlaylistById"
import { checkMusicPlaylistRelation, addMusicInPlaylistDTO } from "../../model/playlists"
import { getTokenData } from "../../services/authenticator"


export const addMusicInPlaylistBusiness = async (input: addMusicInPlaylistDTO) : Promise<void> => {

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

        const checkMusicPlaylistRelation: checkMusicPlaylistRelation = 
        { musicId: input.musicId, playlistId: input.playlistId }

        if (!await musicAlreadyInPlaylist(checkMusicPlaylistRelation)) {

            await addMusicInPlaylist(input)
        }
        else {
            
            throw new Error("A música já foi adicionada na playlist")
        }
    }
    catch (error) {

        throw new Error(error.message)
    }
}
