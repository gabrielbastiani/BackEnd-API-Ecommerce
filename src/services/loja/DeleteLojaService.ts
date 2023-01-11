import prismaClient from "../../prisma";

interface LojaRequest {
    loja_id: string;
}

class DeleteLojaService {
    async execute({ loja_id }: LojaRequest) {
        const loja = await prismaClient.loja.delete({
            where: {
                id: loja_id
            }
        })

        return loja;
    }

}

export { DeleteLojaService }