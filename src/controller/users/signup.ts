import { Request, Response } from "express"
import { signupBusiness } from "../../business/users/signupBusiness"
import { signupDTO } from "../../model/users"


export const signup = async (req: Request,res: Response) : Promise<void> => {

   try {

      const { name, nickname, email, password } = req.body

      const input: signupDTO = { name, nickname, email, password }

      const token = await signupBusiness(input)

      res.status(200).send({ token })
   } 
   catch (error) {

      res.status(400).send({ error: error.message })
   }
}
