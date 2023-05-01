import { StatusDestaque, StatusProduct } from "@prisma/client";
import prismaClient from "../../prisma";

class ListAllProductDestaquesService {
    async execute() {
        const destaqueProduct = await prismaClient.product.findMany({
            where: {
                produtoDestaque: StatusDestaque.Sim,
                disponibilidade: StatusProduct.Disponivel
            },
            include: {
                relationproductcategories: true,
                relationProductAtributos: true,
                loja: true,
                photoproducts: true,
                variacoes: true,
                photovariacoes: true,
                avaliacoes: true,
            },
            orderBy: {
                order: 'asc'
            }
        })

        return destaqueProduct;
    }
}

export { ListAllProductDestaquesService }