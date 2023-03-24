import prismaClient from "../../prisma";

interface BannerHomeRequest {
    bannerInPage_id: string;
}

class DeleteBannerInPageService {
    async execute({ bannerInPage_id }: BannerHomeRequest) {
        const pageBaner = await prismaClient.bannerInPage.delete({
            where: {
                id: bannerInPage_id
            }
        })

        return pageBaner;
    }

}

export { DeleteBannerInPageService }