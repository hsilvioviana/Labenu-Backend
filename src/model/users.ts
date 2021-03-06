export enum USER_ROLES {

   NORMAL = "NORMAL",
   ADMIN = "ADMIN"
}

export type authenticationData = {

   id: string,
   role: USER_ROLES
}

export type signupDTO = {

   name: string,
   nickname: string,
   email: string,
   password: string
}

export type userCreator = {

   id: string
   name: string,
   nickname: string,
   email: string,
   password: string,
   role: USER_ROLES
}

export type user = {

   id: string
   name: string,
   nickname: string,
   email: string,
   password: string,
   role: USER_ROLES
   createdAt: Date,
   updatedAt: Date
}

export type loginDTO = {

   login: string,
   password: string
}
