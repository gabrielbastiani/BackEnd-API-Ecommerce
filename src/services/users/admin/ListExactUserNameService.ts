import prismaClient from '../../prisma';

interface RequestUser {
    slug: string;
}

class ListExactUserNameService {
    async execute({ slug }: RequestUser) {
        const exactUser = await prismaClient.user.findUnique({
            where: {
                slug: slug
            }
        })
        return exactUser;
    }
}

export { ListExactUserNameService }