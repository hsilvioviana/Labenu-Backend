import { post } from "./musics"

export type createPlaylistDTO = {

    token: string,
	title: string
}

export type playlistCreator = {

    id: string
    userId: string,
    title: string
}

export type addMusicInPlaylistDTO = {

    token: string,
	playlistId: string,
    musicId: string
}

export type removeMusicInPlaylistDTO = {

    token: string,
	playlistId: string,
    musicId: string
}

export type checkMusicPlaylistRelation = {

	playlistId: string,
    musicId: string
}

export type playlistDetails = {

    id: string,
    title: string,
    creatorId: string,
    createdAt: string,
    updatedAt: string
}

export type playlist = {

    id: string
    title: string,
}

export type getPlaylistDTO = {
    
    id: string,
    token: string
}

export type playlistMusics = {

    title: string,
    musics: post[]
}

export type removePlaylistDTO = {
    
    id: string,
    token: string
}
