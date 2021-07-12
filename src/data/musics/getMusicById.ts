import { post } from "../../model/musics"
import { connection } from "../connection"


export const getMusicById = async (id: string) : Promise <post> => {

    const result = await connection.raw(`SELECT * FROM LFS_Musics WHERE id = "${id}"`)

    return result[0][0]
}