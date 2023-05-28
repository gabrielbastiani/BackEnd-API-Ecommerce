import prismaClient from "../../../prisma";

interface FiltroAtributoRequest {
    atributoName: string;
}

class DeleteAllAtributoFiltroService {
    async execute({ atributoName }: FiltroAtributoRequest) {
        const filter = await prismaClient.filterAtributo.deleteMany({
            where: {
                atributoName: atributoName
            }
        });

        return filter;

    }
}

export { DeleteAllAtributoFiltroService }