export type postMusicDTO = {

    token: string,
	title: string,
	author: string,
	releaseDate: string,
	file: string,
	genres: string[],
	album: string
}

export type postCreator = {

    id: string,
	title: string,
	author: string,
	releaseDate: string,
	file: string,
	genres: string,
	album: string,
    postedBy: string
}

export type postedBy = {
	
	id: string,
	name: string
}

export type post = {

    id: string,
	title: string,
	author: string,
	releaseDate: string,
	file: string,
	genres: string,
	album: string,
	createdAt: string,
	updatedAt: string,
    postedBy: postedBy
}

export type getMusicDTO = {
	
	id: string,
	token: string
}

export type removePostDTO = {
    
    id: string,
    token: string
}
