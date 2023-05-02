import prismaClient from '../../../prisma';

class PageListAllGroupsAtributosService {
    async execute(page = 1, limit = 999999) {

        const skip = limit * (page - 1);

        const groupsAllAtributos = await prismaClient.groupFilterAtributo.findMany({
            where: {
                itemName: ""
            },
            orderBy: {
                created_at: 'desc'
            },
            include: {
                atributo: true,
                imageAtributoGroups: true
            }
        });

        const filter = await prismaClient.groupFilterAtributo.findMany({
            where: {
                itemName: ""
            },
            orderBy: {
                created_at: 'desc'
            },
            include: {
                atributo: true,
                imageAtributoGroups: true
            },
            skip,
            take: limit
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limite que recebeu
        const data = {
            filter,
            total: groupsAllAtributos.length,
            total_pages: Math.ceil(groupsAllAtributos.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageListAllGroupsAtributosService }