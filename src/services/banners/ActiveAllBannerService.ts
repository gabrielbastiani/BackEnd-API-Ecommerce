import { StatusBanner } from '@prisma/client';
import prismaClient from "../../prisma";

class ActiveAllBannerService {
    async execute() {
        const banners = await prismaClient.banner.findMany({
            where: {
                active: StatusBanner.Sim
            },
            orderBy: {
                created_at: 'desc'
            }
        })

        return banners;
    }
}

export { ActiveAllBannerService }