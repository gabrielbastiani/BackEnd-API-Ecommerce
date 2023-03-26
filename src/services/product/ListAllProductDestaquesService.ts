import { StatusDestaque } from "@prisma/client";
import prismaClient from "../../prisma";

class ListAllProductDestaquesService {
    async execute() {
        const destaqueProduct = await prismaClient.product.findMany({
            where: {
                produtoDestaque: StatusDestaque.Sim
            },
            include: {
                photoproducts: true,
                variacoes: true,
                photovariacoes: true,
                avaliacoes: true,
            },
            orderBy: {
                created_at: 'desc'
            }
        })

        return destaqueProduct;
    }
}

export { ListAllProductDestaquesService }