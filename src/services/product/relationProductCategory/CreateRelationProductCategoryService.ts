import prismaClient from "../../../prisma";

interface RelationRequest {
    product_id: string;
    photoProduct_id: string;
    photoProduct_id1: string;
    category_id: string;
    nivel: number;
    relationId: string;
    order: number;
    posicao: string;
    slugPosicao: string;
    loja_id: string;
}

class CreateRelationProductCategoryService {
    async execute({ product_id, photoProduct_id, photoProduct_id1, category_id, nivel, relationId, order, posicao, loja_id }: RelationRequest) {

        function removerAcentos(s: any) {
            return s.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/ +/g, "-")
                .replace(/-{2,}/g, "-")
                .replace(/[/]/g, "-");
        }

        const categoryAlredyExist = await prismaClient.relationProductCategory.findFirst({
            where: {
                product_id: product_id,
                category_id: category_id,
            }
        })

        if (categoryAlredyExist) {
            throw new Error("Categoria já cadastrada nesse produto!")
        }

        const relation = await prismaClient.relationProductCategory.create({
            data: {
                product_id: product_id,
                photoProduct_id: photoProduct_id,
                photoProduct_id1: photoProduct_id1,
                category_id: category_id,
                nivel: nivel,
                relationId: relationId,
                order: Number(order),
                posicao: posicao,
                slugPosicao: removerAcentos(posicao),
                loja_id: loja_id
            }
        });

        return relation;

    }
}

export { CreateRelationProductCategoryService }