import { StatusOferta, StatusProduct } from "@prisma/client";
import prismaClient from "../../prisma";

class ListAllProductOfertasService {
    async execute() {
        const ofertasProducts = await prismaClient.product.findMany({
            where: {
                produtoOferta: StatusOferta.Sim,
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

        return ofertasProducts;
    }
}

export { ListAllProductOfertasService }