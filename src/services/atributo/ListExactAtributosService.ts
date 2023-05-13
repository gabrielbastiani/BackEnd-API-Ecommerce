import prismaClient from '../../prisma';

interface AtributoRequest {
    atributo_id: string;
}

class ListExactAtributosService {
    async execute({ atributo_id }: AtributoRequest) {
        const exactAtributo = await prismaClient.atributo.findUnique({
            where: {
                id: atributo_id
            },
            include: {
                relationProductAtributos: true,
                imageatributos: true,
                filteratributos: true
            }
        })
        return exactAtributo;
    }
}

export { ListExactAtributosService }