import { Router } from "express"
import { signup } from "../controller/users/signup"
import { login } from "../controller/users/login"


export const usersRouter = Router()

usersRouter.post("/signup", signup)
usersRouter.post("/login", login)
