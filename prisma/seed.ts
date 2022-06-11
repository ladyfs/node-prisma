import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    await prisma.user.deleteMany({});
    await prisma.post.deleteMany({});

    const user = await prisma.user.create({
        data: {
            email: 'ladiene@hotmail.com',
            name: 'Lady',
            age: 90
        }
    });

    const post = await prisma.post.create({
        data: {
            title: 'Post de teste usando seed',
            body: 'Post teste',
            authorId: user.id
        }
    })
}

main();