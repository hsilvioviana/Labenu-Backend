import { getUserByNicknameOrEmail } from "../../data/users/getUserByNicknameOrEmail";
import { user, usersLoginInputDTO } from "../../model/users";
import { generateToken } from "../../services/authenticator";
import { compare } from "../../services/hashManager";


export const loginBusiness = async (input: usersLoginInputDTO) : Promise<string> => {

    try {

        if (!input.login || !input.password) {

            throw new Error("Você deve fornecer: 'login' e 'password'")
        }

        const user: user = await getUserByNicknameOrEmail(input.login)

        if (!user) {

            throw new Error("Usuário não encontrado")
        }

        if (!await compare(input.password, user.password)) {

            throw new Error("Senha inválida")
        }

        const token = generateToken({ id:user.id, role:user.role })

        return token
    }
    catch(error) {

        throw new Error(error.message)
    }
}