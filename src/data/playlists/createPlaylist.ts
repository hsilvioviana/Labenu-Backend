import { playlistCreator } from "../../model/playlists"
import { connection } from "../connection"


export const createPlaylist = async (input: playlistCreator) : Promise<void> => {

    await connection.raw(`INSERT INTO LFS_Playlists 
    VALUES ("${input.id}", "${input.title}", "${input.userId}", CURDATE(), CURDATE())`)
}
