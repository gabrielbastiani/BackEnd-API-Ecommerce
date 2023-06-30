import { StatusProduct } from '@prisma/client';
import prismaClient from '../../prisma';

interface OrderRequest {
    order: string;
}

class OrderProductsService {
    async execute({ order }: OrderRequest) {
        const prices = await prismaClient.product.findMany({
            where: {
                status: StatusProduct.Disponivel,
            },
            orderBy: {
                name: `${order}`
            },
            include: {
                photoproducts: true
            }
        });

        switch (order) {
        case "asc":
            prices.sort((a, z) => a.name.localeCompare(z.name));
            break;
        case "alfabeticaZA":
            prices.sort((a, z) => z.name.localeCompare(a.name));
            break;
        case "precoCrescente":
            prices.sort((n1, n9) => n9.price - n1.price);
            break;
        case "precoDecrescente":
            prices.sort((n1, n9) => n1.price - n9.price);
            break;
        default:
            prices.sort((a, z) => a.name.localeCompare(z.name));
    }
    }
}

export { OrderProductsService }