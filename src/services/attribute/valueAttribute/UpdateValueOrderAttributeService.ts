import prismaClient from "../../../prisma";

interface ValueRequest {
    valueAttribute_id: string;
    order: number;
}

class UpdateValueOrderAttributeService {
    async execute({ valueAttribute_id, order}: ValueRequest) {
        const updateAttribute = await prismaClient.valueAttribute.update({
            where: {
                id: valueAttribute_id
            },
            data: {
                order: Number(order)
            }
        })

        return updateAttribute;

    }
}

export { UpdateValueOrderAttributeService }