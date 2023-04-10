import prismaClient from "../../prisma";

interface RelationRequest {
    product_id: string;
    category_id: string;
    nivel: number;
    relationId: string;
    order: number;
    posicao: string;
    slugPosicao: string;
}

class CreateRelationProductCategoryService {
    async execute({ product_id, category_id, nivel, relationId, order, posicao }: RelationRequest) {

        function removerAcentos(s: any) {
            return s.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/ +/g, "-")
                .replace(/-{2,}/g, "-")
                .replace(/[/]/g, "-");
        }

        const relation = await prismaClient.relationProductCategory.create({
            data: {
                product_id: product_id,
                category_id: category_id,
                nivel: nivel,
                relationId: relationId,
                order: Number(order),
                posicao: posicao,
                slugPosicao: removerAcentos(posicao)
            }
        });

        return relation;

    }
}

export { CreateRelationProductCategoryService }