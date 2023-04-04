import prismaClient from "../../prisma";

interface BannerRequest {
    banner_id: any;
    title: string;
    width: string;
    height: string;
    dateInicio: string;
    dateFim: string;
    order: number;
    url: string;
}

class UpdateAllDateBannerService {
    async execute({
        banner_id,
        title,
        width,
        height,
        dateInicio,
        dateFim,
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
                dateInicio: dateInicio,
                dateFim: dateFim,
                order: order,
                url: url
            }
        })

        return updateBanner;

    }
}

export { UpdateAllDateBannerService }