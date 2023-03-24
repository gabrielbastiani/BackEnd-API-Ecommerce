import { StatusBannerHome } from '@prisma/client';
import prismaClient from "../../prisma";

class ActiveAllBannerHomeService {
    async execute() {
        const bannerHomes = await prismaClient.bannerHome.findMany({
            where: {
                active: StatusBannerHome.Sim
            },
            orderBy: {
                created_at: 'desc'
            }
        })

        return bannerHomes;
    }
}

export { ActiveAllBannerHomeService }