import { StatusOfertaVariacao } from "@prisma/client";
import prismaClient from "../../prisma";

class ListAllVariacaoOfertasService {
    async execute() {
        const variacaoOfertas = await prismaClient.variacao.findMany({
            where: {
                variacaoOferta: StatusOfertaVariacao.Sim
            },
            orderBy: {
                order: 'asc'
            }
        })

        return variacaoOfertas;
    }
}

export { ListAllVariacaoOfertasService }