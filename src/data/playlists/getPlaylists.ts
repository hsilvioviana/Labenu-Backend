import { playlist } from "../../model/playlists"
import { connection } from "../connection"


export const getPlaylists = async (id: string) : Promise<playlist[]> => {

    const result = await connection.raw(`SELECT p.id as playlistId, p.title as playlistName, m.id as musicId,
    m.title as musicName, m.author as musicAuthor
    FROM LFS_Playlists p JOIN LFS_MusicsPlaylistsRelations r 
    ON p.id = r.playlistId JOIN LFS_Musics m ON r.musicId = m.id WHERE p.CreatorId = "${id}"`)

    let playlists: playlist[] = []

    const playlistsAdded: string[] = []

    for (let item of result[0]) {

        if (!playlistsAdded.includes(item.playlistId)) {

            playlistsAdded.push(item.playlistId)

            playlists.push({ 
                playlistId: item.playlistId, 
                playlistName: item.playlistName,
                musics: [] })
        }
    }

    for (let item of result[0]) {

        for (let playlist of playlists) {

            if (playlist.playlistName === item.playlistName) {

                playlist.musics.push({ musicId: item.musicId,
                                        musicName: item.musicName,
                                        musicAuthor: item.musicAuthor })
            }
        }
    }

    return playlists
}