import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

type findeOneData = {
    id?: number,
    email?: string

}

export const UserService = {

    findOne: async (data: findeOneData) => {

        return await prisma.user.findUnique({ where: data })

    }
}