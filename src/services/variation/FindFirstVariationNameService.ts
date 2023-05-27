import prismaClient from '../../prisma';

interface VariationRequest {
    slug: string;
}

class FindFirstVariationNameService {
    async execute({ slug }: VariationRequest) {
        const findVariation = await prismaClient.variation.findFirst({
            where: {
                slug: slug
            },
            include: {
                photovariations: true,
                product: true,
                store: true
            }
        })
        return findVariation;
    }
}

export { FindFirstVariationNameService }