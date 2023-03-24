import prismaClient from "../../prisma";

interface BannerHomeRequest {
    bannerHome_id: string;
}

class DeleteBannerHomeService {
    async execute({ bannerHome_id }: BannerHomeRequest) {

        const bannerHome = await prismaClient.bannerHome.delete({
            where: {
                id: bannerHome_id
            }
        })

        return bannerHome;
    }

}

export { DeleteBannerHomeService }