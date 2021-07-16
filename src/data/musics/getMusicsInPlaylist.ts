import { post } from "../../model/musics"
import { genresSplit } from "../../services/genresManager"
import { connection } from "../connection"


export const getMusicsInPlaylist = async (playlistId: string) : Promise<post[]> => {

    const result = await connection.raw(`SELECT m.id, m.title, m.author,
    DATE_FORMAT(m.releaseDate,'%d/%m/%Y') AS releaseDate , m.file, m.genres,
    m.album, DATE_FORMAT(m.createdAt,'%d/%m/%Y') AS createdAt, 
    DATE_FORMAT(m.updatedAt,'%d/%m/%Y') AS updatedAt
    FROM LFS_MusicsPlaylistsRelations r LEFT JOIN LFS_Musics m 
    ON r.musicId = m.id WHERE r.playlistId = "${playlistId}"`)

    const posts: post[] = []

    for (let post of result[0]) {

        post = {...post, genres: genresSplit(post.genres) }

        posts.push(post)
    }

    return posts
}
