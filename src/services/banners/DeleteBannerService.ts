import prismaClient from "../../prisma";

interface BannerRequest {
    banner_id: string;
}

class DeleteBannerService {
    async execute({ banner_id }: BannerRequest) {

        const banners = await prismaClient.banner.delete({
            where: {
                id: banner_id
            }
        })

        return banners;
    }

}

export { DeleteBannerService }