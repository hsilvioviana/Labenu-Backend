import { connection } from "../connection"


export const deletePlaylist = async (id: string) : Promise<void> => {

    await connection.raw(`DELETE FROM LFS_MusicsPlaylistsRelations
    WHERE playlistId = "${id}"`)

    await connection.raw(`DELETE FROM LFS_Playlists 
    WHERE id = "${id}"`)
}
