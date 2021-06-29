import { getUserByEmail } from "../../data/users/getUserByEmail";
import { getUserByNickname } from "../../data/users/getUserByNickname";
import { user, usersLoginInputDTO } from "../../model/users";
import { generateToken } from "../../services/authenticator";
import { compare } from "../../services/hashManager";


export const loginBusiness = async (input: usersLoginInputDTO) : Promise<string> => {

    try {

        if ((!input.nickname && !input.email) || !input.password) {

            throw new Error("Você deve fornecer: ('nickname' ou 'email') e 'password'")
        }

        let existsUser

        if (input.nickname) {

            existsUser = await getUserByNickname(input.nickname)
        }
        else if (input.email) {

            existsUser = await getUserByEmail(input.email)
        }

        if (!existsUser) {

            throw new Error("Usuário não encontrado")
        }

        if (!await compare(input.password, existsUser.password)) {

            throw new Error("Senha inválida")
        }

        const token = generateToken({ id: existsUser.id, role: existsUser.role })

        return token
    }
    catch(error) {

        throw new Error(error.message)
    }
}