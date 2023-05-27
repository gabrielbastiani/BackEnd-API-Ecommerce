import { StatusDestaqueVariacao } from "@prisma/client";
import prismaClient from "../../prisma";

class ListAllVariacaoDestaquesService {
    async execute() {
        const destaqueVariacao = await prismaClient.variacao.findMany({
            where: {
                variacaoDestaque: StatusDestaqueVariacao.Sim
            },
            include: {
                photovariacoes: true
            },
            orderBy: {
                order: 'asc'
            }
        })

        return destaqueVariacao;
    }
}

export { ListAllVariacaoDestaquesService }