import { StatusProduct } from '@prisma/client';
import prismaClient from '../../prisma';

interface OrderRequest {
    sortBy: any;
}

class OrderProductsService {
    async execute({ sortBy }: OrderRequest) {
        const ordersProducts = await prismaClient.product.findMany({
            where: {
                status: StatusProduct.Disponivel,
            },
            include: {
                photoproducts: true
            }
        });

        switch (sortBy) {
            case "produtosDeAaZ":
                ordersProducts.sort((a, z) => a.name.localeCompare(z.name));
                break;
            case "produtosDeZaA":
                ordersProducts.sort((a, z) => z.name.localeCompare(a.name));
                break;
            case "produtosPrecosMaisAltos":
                ordersProducts.sort((n1, n9) => n9.price - n1.price);
                break;
            case "produtosPrecosMaisBaixos":
                ordersProducts.sort((n1, n9) => n1.price - n9.price);
                break;
            case "menorPrecoPromocao":
                ordersProducts.sort((o1, o9) => o1.promotion - o9.promotion);
                break;
            case "maisAntigos":
                ordersProducts.sort((d1, d2) => new Date(d1.created_at).getTime() - new Date(d2.created_at).getTime());
                break;
            case "lancamentos":
                ordersProducts.sort((d1, d2) => new Date(d2.created_at).getTime() - new Date(d1.created_at).getTime());
                break;
            default:
                ordersProducts.sort((a, z) => a.name.localeCompare(z.name));
        }

        return ordersProducts;
    }
}

export { OrderProductsService }