import { StatusBanner } from '@prisma/client';
import prismaClient from "../../prisma";

interface BannerRequest {
    slugPosicao: string;
}

class ActiveAllBannerService {
    async execute({ slugPosicao }: BannerRequest) {
        const banners = await prismaClient.banner.findMany({
            where: {
                active: StatusBanner.Sim,
                slugPosicao: slugPosicao
            },
            orderBy: {
                order: 'asc'
            }
        })

        return banners;
    }
}

export { ActiveAllBannerService }