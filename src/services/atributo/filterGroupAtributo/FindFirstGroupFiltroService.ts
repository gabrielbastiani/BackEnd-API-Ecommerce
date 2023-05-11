import prismaClient from '../../../prisma';

class FindFirstGroupFiltroService {
    async execute() {
        const findGroupFirst = await prismaClient.groupFilterAtributo.findFirst({
            orderBy: {
                created_at: 'desc'
            },
            include: {
                atributo: true,
                imageAtributoGroups: true,
            }
        });
        return findGroupFirst;
    }
}

export { FindFirstGroupFiltroService }