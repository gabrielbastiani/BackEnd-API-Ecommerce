import { StatusBannerMosaico } from "@prisma/client";
import prismaClient from "../../prisma";

class ActiveAllBannerMosaicoService {
    async execute() {
        const bannerMosaico = await prismaClient.bannerMosaico.findMany({
            where: {
                active: StatusBannerMosaico.Sim
            },
            orderBy: {
                created_at: 'desc'
            }
        })

        return bannerMosaico;
    }
}

export { ActiveAllBannerMosaicoService }