export type playlistCreateInputDTO = {

    token: string,
	title: string
}

export type playlistCreator = {

    id: string
    userId: string,
    title: string
}

export type playlistAddOrRemoveMusicInputDTO = {

    token: string,
	playlistId: string,
    musicId: string
}

export type playlist = {

    id: string,
    title: string,
    creatorId: string,
    createdAt: string,
    updatedAt: string
}