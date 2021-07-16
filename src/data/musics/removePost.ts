import { connection } from "../connection"


export const removePost = async (id: string) : Promise<void> => {

    await connection.raw(`DELETE FROM LFS_MusicsPlaylistsRelations WHERE musicId = "${id}"`)

    await connection.raw(`DELETE FROM LFS_Musics WHERE id = "${id}"`)
}