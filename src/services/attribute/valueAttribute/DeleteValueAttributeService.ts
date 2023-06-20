import prismaClient from "../../../prisma";

interface ValueRequest {
    valueAttribute_id: string;
}

class DeleteValueAttributeService {
    async execute({ valueAttribute_id }: ValueRequest) {
        const deleteValue = await prismaClient.valueAttribute.delete({
            where: {
                id: valueAttribute_id
            }
        })

        return deleteValue;

    }
}

export { DeleteValueAttributeService }