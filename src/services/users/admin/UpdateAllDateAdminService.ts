import prismaClient from "../../../prisma";

interface UserRequest {
    admin_id: string;
    email: string;
    store_id: string;
}

class UpdateAllDateAdminService {
    async execute({ admin_id, email, store_id }: UserRequest) {
        const updateAdmin = await prismaClient.admin.update({
            where: {
                id: admin_id
            },
            data: {
                email: email,
                store_id: store_id
            }
        })

        return updateAdmin;

    }

}

export { UpdateAllDateAdminService }