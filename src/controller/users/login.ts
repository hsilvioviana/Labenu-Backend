import { Request, Response } from "express"
import { loginBusiness } from "../../business/users/loginBusiness"
import { loginDTO } from "../../model/users"


export const login = async (req: Request, res: Response) : Promise<void> => {

    try {

        const { login, password } = req.body

        const input: loginDTO = { login, password }

        const token = await loginBusiness(input)

        res.status(200).send({ token })
    }
    catch (error) {

        res.status(400).send({ error: error.message })
    }
}
