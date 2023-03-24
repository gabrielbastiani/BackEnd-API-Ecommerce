import { StatusOferta } from "@prisma/client";
import prismaClient from "../../prisma";

class ListAllProductOfertasService {
    async execute() {
        const ofertasProducts = await prismaClient.product.findMany({
            where: {
                produtoOferta: StatusOferta.Sim
            },
            orderBy: {
                created_at: 'desc'
            }
        })

        return ofertasProducts;
    }
}

export { ListAllProductOfertasService }