import { playlist } from "../../model/playlists"
import { connection } from "../connection"


export const getPlaylistById = async (id: string) : Promise <playlist> => {

    const result = await connection.raw(`SELECT * FROM LFS_Playlists WHERE id = "${id}"`)

    return result[0][0]
}