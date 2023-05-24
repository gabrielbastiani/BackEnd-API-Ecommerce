import prismaClient from "../../prisma";

interface LojaRequest {
    store_id: string;
}

class DeleteLojaService {
    async execute({ store_id }: LojaRequest) {
        const loja = await prismaClient.loja.delete({
            where: {
                id: store_id
            }
        })

        return loja;
    }

}

export { DeleteLojaService }