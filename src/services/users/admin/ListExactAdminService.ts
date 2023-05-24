import prismaClient from "../../../prisma";

interface AdminRequest {
    admin_id: string;
}

class ListExactAdminService {
    async execute({ admin_id }: AdminRequest) {
        const exactAdmin = await prismaClient.admin.findUnique({
            where: {
                id: admin_id
            },
            include: {
                store: true
            }
        })
        return exactAdmin;
    }
}

export { ListExactAdminService }