import { playlistAddOrRemoveMusicInputDTO } from "../../model/playlists";
import { connection } from "../connection";


export const addMusicInPlaylist = async (input: playlistAddOrRemoveMusicInputDTO) : Promise<void> => {

    await connection.raw(`INSERT INTO LFS_MusicsPlaylistsRelations 
    VALUES ("${input.musicId}", "${input.playlistId}", CURDATE())`)
}