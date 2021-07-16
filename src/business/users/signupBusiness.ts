import { createUser } from "../../data/users/createUser"
import { getUserByNicknameOrEmail } from "../../data/users/getUserByNicknameOrEmail"
import { userCreator, signupDTO, USER_ROLES } from "../../model/users"
import { generateToken } from "../../services/authenticator"
import { hash } from "../../services/hashManager"
import { generateId } from "../../services/idGenerator"


export const signupBusiness = async (input: signupDTO) : Promise<string> => {

    try {
        
        if (!input.name || !input.nickname || !input.email || !input.password) {

            throw new Error ("Você deve fornecer: 'name', 'nickname', 'email' e 'password'")
        }

        if (input.password.length < 6) { 

            throw new Error("A senha deve ter no mínimo 6 caracteres") 
        }

        let existsUser

        existsUser = await getUserByNicknameOrEmail(input.nickname)

        if (existsUser) {

            throw new Error("O 'nickname' fornecido é inválido")
        }

        existsUser = await getUserByNicknameOrEmail(input.email)
        
        if (existsUser) {

            throw new Error("O 'email' fornecido é inválido")
        }

        const newUser: userCreator = {

            id: generateId(),
            name: input.name,
            nickname: input.nickname,
            email: input.email,
            password: await hash(input.password),
            role: USER_ROLES.NORMAL
        }

        await createUser(newUser)

        const token = generateToken({ id: newUser.id, role: newUser.role })

        return token
    }
    catch (error) {

        throw new Error(error.message)
    }
}
