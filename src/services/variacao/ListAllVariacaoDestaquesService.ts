import { StatusDestaqueVariacao } from "@prisma/client";
import prismaClient from "../../prisma";

class ListAllVariacaoDestaquesService {
    async execute() {
        const destaqueVariacao = await prismaClient.variacao.findMany({
            where: {
                variacaoDestaque: StatusDestaqueVariacao.Sim
            },
            orderBy: {
                created_at: 'desc'
            }
        })

        return destaqueVariacao;
    }
}

export { ListAllVariacaoDestaquesService }