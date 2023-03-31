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
                photoproducts: true,
                variacoes: true,
                photovariacoes: true,
                avaliacoes: true,
            },
            orderBy: {
                created_at: 'desc'
            }
        })

        return ofertasProducts;
    }
}

export { ListAllProductOfertasService }