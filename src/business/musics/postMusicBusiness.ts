import { createPost } from "../../data/musics/createPost"
import { postMusicDTO, postCreator } from "../../model/musics"
import { getTokenData } from "../../services/authenticator"
import { dateValid, dateFormat } from "../../services/dateManager"
import { genresFormat, genresValid } from "../../services/genresManager"
import { generateId } from "../../services/idGenerator"


export const postMusicBusiness = async (input: postMusicDTO) : Promise<void> => {

    try {

        const user = getTokenData(input.token)

        if (!input.title || !input.author || !input.releaseDate || !input.file || !input.genres || !input.album) {

            throw new Error("Você deve fornecer: 'title', 'author', 'releaseDate', 'file', 'genres' e 'album'")
        }

        if (!dateValid(input.releaseDate)) {

            throw new Error("O campo 'date' deve estar no formato: dd/mm/aaaa")
        }

        if (!genresValid(input.genres)) {

            throw new Error("A lista 'genres' deve ter pelo menos um item")
        }

        const newPost: postCreator = {

            id: generateId(),
            title: input.title,
            author: input.author,
            releaseDate: dateFormat(input.releaseDate),
            file: input.file,
            genres: genresFormat(input.genres),
            album: input.album,
            postedBy : user.id
        }

        await createPost(newPost)
    }
    catch(error) {

        throw new Error(error.message)
    }
}
