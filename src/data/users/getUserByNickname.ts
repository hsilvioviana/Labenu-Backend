import { user } from "../../model/users"
import { connection } from "../connection"


export const getUserByNickname = async (nickname: string) : Promise <user> => {

    const result = await connection.raw(`SELECT * FROM LFS_Users WHERE nickname = "${nickname}"`)

    return result[0][0]
}