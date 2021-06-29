import { Request, Response } from "express"
import { signupBusiness } from "../../business/users/signupBusiness"
import { usersSignupInputDTO } from "../../model/users"


export const signup = async (req: Request,res: Response) : Promise<void> => {

   try {

      const { name, nickname, email, password } = req.body

      const input: usersSignupInputDTO = { name, nickname, email, password }

      const token = await signupBusiness(input)

      res.status(201).send({ token })
   } 
   catch (error) {

      res.status(400).send({ error: error.message })
   }
}