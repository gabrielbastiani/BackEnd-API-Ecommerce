import { StatusFilterAtributo } from '@prisma/client';
import prismaClient from '../../../prisma';

interface FiltroAtributoRequest {
    groupFilter_id: any;
}

class FindAtributoFiltroService {
    async execute({ groupFilter_id }: FiltroAtributoRequest) {
        const filtroAtributos = await prismaClient.filterAtributo.findMany({
            where: {
                groupFilter_id: groupFilter_id,
                status: StatusFilterAtributo.Ativo 
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                atributo: true,
                groupFilter: true,
                imagefilteratributos: true
            }
        });

        return filtroAtributos;

    }
}

export { FindAtributoFiltroService }