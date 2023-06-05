import prismaClient from "../../../prisma";

class AllValueAttributeService {
    async execute() {
        const allAttributes = await prismaClient.relationAttributeProduct.findMany({
            where: {
                nivel: 1
            },
            include: {
                imageattributes: true,
                product: true,
                store: true,
                typeAttribute: true
            }
        });

        return allAttributes;

    }
}

export { AllValueAttributeService }