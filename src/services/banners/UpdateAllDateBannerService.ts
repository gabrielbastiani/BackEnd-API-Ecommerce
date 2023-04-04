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
        const updateTitle = await prismaClient.banner.update({
            where: {
                id: String(banner_id)
            },
            data: {
                title: title,
            }
        })

        const updateWidth = await prismaClient.banner.update({
            where: {
                id: String(banner_id)
            },
            data: {
                width: width,
            }
        })

        const updateHeight = await prismaClient.banner.update({
            where: {
                id: String(banner_id)
            },
            data: {
                height: height,
            }
        })

        const updateDataInicio = await prismaClient.banner.update({
            where: {
                id: String(banner_id)
            },
            data: {
                dateInicio: dateInicio,
            }
        })

        const updateDataFim = await prismaClient.banner.update({
            where: {
                id: String(banner_id)
            },
            data: {
                dateFim: dateFim,
            }
        })

        const updateOrder = await prismaClient.banner.update({
            where: {
                id: String(banner_id)
            },
            data: {
                order: order
            }
        })

        const updateUrl = await prismaClient.banner.update({
            where: {
                id: String(banner_id)
            },
            data: {
                url: url
            }
        })

        return [
            updateTitle,
            updateWidth,
            updateHeight,
            updateDataInicio,
            updateDataFim,
            updateOrder,
            updateUrl
        ]

    }
}

export { UpdateAllDateBannerService }