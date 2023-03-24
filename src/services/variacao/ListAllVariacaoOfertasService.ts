import { StatusOfertaVariacao } from "@prisma/client";
import prismaClient from "../../prisma";

class ListAllVariacaoOfertasService {
    async execute() {
        const variacaoOfertas = await prismaClient.variacao.findMany({
            where: {
                variacaoOferta: StatusOfertaVariacao.Sim
            },
            orderBy: {
                created_at: 'desc'
            }
        })

        return variacaoOfertas;
    }
}

export { ListAllVariacaoOfertasService }