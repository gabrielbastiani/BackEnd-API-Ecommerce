import { StatusBanner } from '@prisma/client';
import prismaClient from "../../prisma";

interface BannerRequest {
    slugPosition: string;
}

class ActiveAllBannerService {
    async execute({ slugPosition }: BannerRequest) {
        const banners = await prismaClient.banner.findMany({
            where: {
                active: StatusBanner.Sim,
                slugPosition: slugPosition
            },
            orderBy: {
                order: 'asc'
            }
        })

        return banners;
    }
}

export { ActiveAllBannerService }