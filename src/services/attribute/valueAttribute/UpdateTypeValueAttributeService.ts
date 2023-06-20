import prismaClient from "../../../prisma";

interface ValueRequest {
    valueAttribute_id: string;
    type: string;
    slug: string;
}

class UpdateTypeValueAttributeService {
    async execute({ valueAttribute_id, type }: ValueRequest) {
        const updateAttribute = await prismaClient.valueAttribute.update({
            where: {
                id: valueAttribute_id
            },
            data: {
                type: type
            }
        })

        return updateAttribute;

    }
}

export { UpdateTypeValueAttributeService }