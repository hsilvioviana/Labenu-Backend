import { createUser } from "../../data/users/createUser"
import { getUserByEmail } from "../../data/users/getUserByEmail"
import { getUserByNickname } from "../../data/users/getUserByNickname"
import { userCreator, usersSignupInputDTO, USER_ROLES } from "../../model/users"
import { generateToken } from "../../services/authenticator"
import { hash } from "../../services/hashManager"
import { generateId } from "../../services/idGenerator"


export const signupBusiness = async (input: usersSignupInputDTO) : Promise<string> => {

    try {
        
        if (!input.name || !input.nickname || !input.email || !input.password) {

            throw new Error ("Você deve fornecer: 'name', 'nickname', 'email' e 'password'")
        }

        if (input.password.length < 6) { 

            throw new Error("A senha deve ter no mínimo 6 caracteres") 
        }

        const existsNickname = await getUserByNickname(input.nickname)
        if (existsNickname) {

            throw new Error("Esse nickname já está sendo utilizado")
        }

        const existsEmail = await getUserByEmail(input.email)
        if (existsEmail) {

            throw new Error("Esse email já está sendo utilizado")
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