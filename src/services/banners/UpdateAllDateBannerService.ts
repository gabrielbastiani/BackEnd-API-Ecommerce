import prismaClient from "../../prisma";

interface BannerRequest {
    banner_id: any;
    title: string;
    width: string;
    height: string;
    startDate: string;
    endDate: string;
    order: number;
    url: string;
}

class UpdateAllDateBannerService {
    async execute({
        banner_id,
        title,
        width,
        height,
        startDate,
        endDate,
        order,
        url
    }: BannerRequest) {
        const updateBanner = await prismaClient.banner.update({
            where: {
                id: String(banner_id)
            },
            data: {
                title: title,
                width: width,
                height: height,
                startDate: startDate,
                endDate: endDate,
                order: order,
                url: url
            }
        })

        return updateBanner;

    }
}

export { UpdateAllDateBannerService }