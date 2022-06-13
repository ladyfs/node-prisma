import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

type createData = {
    title: string,
    body: string,
    authorId: number,
}


type updateData = {
    title?: string,
    body?: string,
    authorId?: number,
    published?: boolean
}


export const PostService = {

    findAll: async () => {
        return await prisma.post.findMany({
            where: {
                published: true
            },
            orderBy: {
                id: 'desc'
            }
        })
    },

    findOne: async (id: number) => {

        return await prisma.post.findUnique({
            where: { id: id }
        })

    },

    create: async (data: createData) => {

        return await prisma.post.create({ data })
    },

    update: async (id: number, data: updateData) => {

        return await prisma.post.update({
            where: { id },
            data
        })
    },

    delete: async (id: number) => {

        return await prisma.post.delete({ where: { id } })
    }
}