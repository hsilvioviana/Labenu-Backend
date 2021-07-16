import { userCreator } from "../../model/users"
import { connection } from "../connection"


export const createUser = async (user: userCreator) : Promise<void> => {

    await connection.raw(`INSERT INTO LFS_Users VALUES ("${user.id}", "${user.name}", "${user.nickname}",
    "${user.email}", "${user.password}", "${user.role}", CURDATE(), CURDATE())`)
}
