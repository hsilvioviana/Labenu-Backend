import { post } from "./musics"

export type playlistCreateInputDTO = {

    token: string,
	title: string
}

export type playlistCreator = {

    id: string
    userId: string,
    title: string
}

export type playlistAddMusicInputDTO = {

    token: string,
	playlistId: string,
    musicId: string
}

export type playlistRemoveMusicInputDTO = {

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

export type playlistMusicsDTO = {
    
    id: string,
    token: string
}

export type playlistMusics = {

    title: string,
    musics: post[]
}

export type playlistDeleteDTO = {
    
    id: string,
    token: string
}
