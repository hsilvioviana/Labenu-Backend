import { post } from "../../model/musics"
import { genresSplit } from "../../services/genresManager"
import { connection } from "../connection"


export const getMusic = async (id: string) : Promise<post> => {

    const result = await connection.raw(`SELECT m.id, m.title, m.author,
    DATE_FORMAT(m.releaseDate,'%d/%m/%Y') AS releaseDate , m.file, m.genres,
    m.album, DATE_FORMAT(m.createdAt,'%d/%m/%Y') AS createdAt, 
    DATE_FORMAT(m.updatedAt,'%d/%m/%Y') AS updatedAt, u.id as userId, u.nickname 
    FROM LFS_Musics m JOIN LFS_Users u ON m.postedBy = u.id WHERE m.id = "${id}" ORDER BY m.createdAt`)

    const posts: post[] = []

    for (let post of result[0]) {

        post = {...post, genres: genresSplit(post.genres),
        postedBy: { id: post.userId, nickname: post.nickname } }

        delete post.userId
        delete post.nickname

        posts.push(post)
    }

    return posts[0]
}
