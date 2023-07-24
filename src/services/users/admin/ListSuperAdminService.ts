import { RoleAdmin } from "@prisma/client";
import prismaClient from "../../../prisma";

class ListSuperAdminService {
    async execute() {
        const superAdmin = await prismaClient.admin.findFirst({
            where: {
                role: RoleAdmin.ADMIN
            }
        })
        return superAdmin;
    }
}

export { ListSuperAdminService }