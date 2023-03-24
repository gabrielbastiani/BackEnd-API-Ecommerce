import { StatusBannerPage } from "@prisma/client";
import prismaClient from "../../prisma";

class ActiveAllBannerInPageService {
    async execute() {
        const bannerPage = await prismaClient.bannerInPage.findMany({
            where: {
                active: StatusBannerPage.Sim
            },
            orderBy: {
                created_at: 'desc'
            }
        })

        return bannerPage;
    }
}

export { ActiveAllBannerInPageService }