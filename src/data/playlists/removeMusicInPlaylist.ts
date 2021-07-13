import { playlistAddOrRemoveMusicInputDTO } from "../../model/playlists";
import { connection } from "../connection";


export const removeMusicInPlaylist = async (input: playlistAddOrRemoveMusicInputDTO) : Promise<void> => {

    await connection.raw(`DELETE FROM LFS_MusicsPlaylistsRelations WHERE
    "${input.musicId}" = musicId AND "${input.playlistId}" = playlistId`)
}