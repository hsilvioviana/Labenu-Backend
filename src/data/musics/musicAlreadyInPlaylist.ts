import { playlistAddOrRemoveMusicInputDTO } from "../../model/playlists"
import { connection } from "../connection"


export const musicAlreadyInPlaylist = async (input: playlistAddOrRemoveMusicInputDTO) : Promise<boolean> => {

    const result = await connection.raw(`SELECT * FROM LFS_MusicsPlaylistsRelations 
    WHERE musicId = "${input.musicId}" AND playlistId = "${input.playlistId}"`)

    if(result[0][0]) {

        return true
    }
    else {

        return false
    }
}