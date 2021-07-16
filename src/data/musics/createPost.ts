import { postCreator } from "../../model/musics"
import { connection } from "../connection"


export const createPost = async (post: postCreator) : Promise<void> => {

    await connection.raw(`INSERT INTO LFS_Musics VALUES ("${post.id}", "${post.title}",
    "${post.author}", "${post.releaseDate}", "${post.file}", "${post.genres}", 
    "${post.album}", CURDATE(), CURDATE(), "${post.postedBy}")`)
}
