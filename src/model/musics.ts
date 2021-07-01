export type musicsPostInputDTO = {

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