import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

type findeOneData = {
    id?: number,
    email?: string

}

type createData = {
    email: string;
    name: string;
    age?: number;
}

export const UserService = {

    findOne: async (data: findeOneData) => {

        return await prisma.user.findUnique({ where: data })

    },

    findAll: async () => {
        return await prisma.user.findMany({})
    },

    create: async (data: createData) => {
        return await prisma.user.create({
            data: {
                email: data.email,
                name: data.name,
                age: data.age ?? 0
            }
        });
    }
}