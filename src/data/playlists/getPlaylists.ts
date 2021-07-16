import { playlist } from "../../model/playlists"
import { connection } from "../connection"


export const getPlaylists = async (id: string) : Promise<playlist[]> => {

    const result = await connection.raw(`SELECT id, title, DATE_FORMAT(createdAt,'%d/%m/%Y') as createdAt,
    DATE_FORMAT(updatedAt,'%d/%m/%Y') as updatedAt FROM LFS_Playlists 
    WHERE creatorId = "${id}" ORDER BY title`)

    return result[0]
}
