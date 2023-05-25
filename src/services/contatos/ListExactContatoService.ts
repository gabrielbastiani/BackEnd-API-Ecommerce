import prismaClient from '../../prisma';

class ListExactContatoService {
    async execute({ contato_id }) {
        const exactContato = await prismaClient.contato.findUnique({
            where: {
                id: String(contato_id)
            },
            include: {
                store: true,
            },
        })
        return exactContato;
    }
}

export { ListExactContatoService }