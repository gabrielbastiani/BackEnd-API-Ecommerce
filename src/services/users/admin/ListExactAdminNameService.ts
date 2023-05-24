import prismaClient from "../../../prisma";

interface AdminRequest {
    slug: string;
}

class ListExactAdminNameService {
    async execute({ slug }: AdminRequest) {
        const exactAdmin = await prismaClient.admin.findFirst({
            where: {
                slug: slug
            }
        })
        return exactAdmin;
    }
}

export { ListExactAdminNameService }