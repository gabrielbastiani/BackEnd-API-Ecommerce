import { RoleAdmin } from '@prisma/client';
import prismaClient from '../../../prisma';

class PageListAllAdminsService {
    async execute(page = 1, limit = 5) {

        const skip = limit * (page - 1);

        const allAdmins = await prismaClient.admin.findMany({
            where: {
                role: RoleAdmin.EMPLOYEE
            },
            orderBy: {
                created_at: 'desc'
            },
            include: {
                store: true
            }
        });

        const admins = await prismaClient.admin.findMany({
            where: {
                role: RoleAdmin.EMPLOYEE
            },
            include: {
                store: true
            },
            skip,
            take: limit,
            orderBy: {
                created_at: 'desc'
            }
        });

        const data = {
            admins,
            total: allAdmins.length,
            total_pages: Math.ceil(allAdmins.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageListAllAdminsService }