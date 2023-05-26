import prismaClient from "../../../prisma";

interface GroupRequest {
    product_id: string;
}

class DeleteGrupoProductAtributoService {
    async execute({ product_id }: GroupRequest) {
        const productGrupo = await prismaClient.relationProductAtributo.deleteMany({
            where: {
                product_id: product_id
            }
        });

        return productGrupo;

    }
}

export { DeleteGrupoProductAtributoService }