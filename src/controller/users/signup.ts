import { Request, Response } from "express"


export const signup = async (req: Request,res: Response) : Promise<void> => {

   try {
      
      res.status(201).send({ message: "Usuário criado!" })
   } 
   catch (error) {

      res.status(400).send(error.message)
   }
}