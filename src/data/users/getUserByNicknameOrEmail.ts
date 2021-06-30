import { user } from "../../model/users"
import { connection } from "../connection"


export const getUserByNicknameOrEmail = async (login: string) : Promise <user> => {

    const result = await connection.raw(`SELECT * FROM LFS_Users 
    WHERE nickname = "${login}" OR email = "${login}"`)

    return result[0][0]
}