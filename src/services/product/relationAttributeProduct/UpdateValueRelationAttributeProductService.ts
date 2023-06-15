import prismaClient from "../../../prisma";

interface RelationAttributeProductRequest {
    relationAttributeProduct_id: string;
    value: string;
    slug: string;
}

class UpdateValueRelationAttributeProductService {
    async execute({
        relationAttributeProduct_id,
        value,
    }: RelationAttributeProductRequest) {

        function removerAcentos(s: any) {
            return s.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/ +/g, "-")
                .replace(/-{2,}/g, "-")
                .replace(/[/]/g, "-");
        }

        const updateAttribute = await prismaClient.relationAttributeProduct.update({
            where: {
                id: relationAttributeProduct_id
            },
            data: {
                value: value,
                slug: removerAcentos(value)
            }
        })

        return updateAttribute;

    }
}

export { UpdateValueRelationAttributeProductService }