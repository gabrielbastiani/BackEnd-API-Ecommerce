import prismaClient from "../../prisma";

interface ContatoRequest {
    contato_id: string;
}

class DeleteContatoService {
    async execute({ contato_id }: ContatoRequest) {
        const contato = await prismaClient.contato.delete({
            where: {
                id: contato_id
            }
        })

        return contato;
    }

}

export { DeleteContatoService }