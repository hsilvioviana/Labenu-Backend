import { removeMusicInPlaylistDTO } from "../../model/playlists"
import { connection } from "../connection"


export const removeMusicInPlaylist = async (input: removeMusicInPlaylistDTO) : Promise<void> => {

    await connection.raw(`DELETE FROM LFS_MusicsPlaylistsRelations WHERE
    "${input.musicId}" = musicId AND "${input.playlistId}" = playlistId`)
}
