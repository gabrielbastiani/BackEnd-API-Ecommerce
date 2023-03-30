import prismaClient from "../../prisma";

class ListContatoService {
    async execute() {
        const contato = await prismaClient.contato.findMany({
            include: {
                loja: true
            },
            orderBy: {
                created_at: 'desc'
            }
        })

        return contato;
    }
}

export { ListContatoService }