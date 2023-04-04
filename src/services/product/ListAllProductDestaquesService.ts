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
                categories: true,
                subcategories: true,
                atributos: true,
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