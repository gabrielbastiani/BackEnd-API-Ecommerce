import { StatusProduct } from '@prisma/client';
import prismaClient from '../../prisma';

class OrderProductsService {
    async execute(page = 1, limit = 20, product_id: any, sortBy: any) {

        const skip = limit * (page - 1);

        const allOrdersProducts = await prismaClient.product.findMany({
            where: {
                id: { in: product_id },
                status: StatusProduct.Disponivel,
            },
            include: {
                photoproducts: true,
                relationattributeproducts: {
                    include: {
                        valueAttribute: true
                    }
                }
            }
        });

        switch (sortBy) {
            case "produtosDeAaZ":
                allOrdersProducts.sort((a, z) => a.name.localeCompare(z.name));
                break;
            case "produtosDeZaA":
                allOrdersProducts.sort((a, z) => z.name.localeCompare(a.name));
                break;
            case "produtosPrecosMaisAltos":
                allOrdersProducts.sort((n1, n9) => n9.price - n1.price);
                break;
            case "produtosPrecosMaisBaixos":
                allOrdersProducts.sort((n1, n9) => n1.price - n9.price);
                break;
            case "menorPrecoPromocao":
                allOrdersProducts.sort((o1, o9) => o1.promotion - o9.promotion);
                break;
            case "maisAntigos":
                allOrdersProducts.sort((d1, d2) => new Date(d1.created_at).getTime() - new Date(d2.created_at).getTime());
                break;
            case "lancamentos":
                allOrdersProducts.sort((d1, d2) => new Date(d2.created_at).getTime() - new Date(d1.created_at).getTime());
                break;
            default:
                allOrdersProducts.sort((a, z) => a.name.localeCompare(z.name));
        }

        const ordersProducts = await prismaClient.product.findMany({
            where: {
                id: { in: product_id },
                status: StatusProduct.Disponivel,
            },
            skip,
            take: limit,
            include: {
                photoproducts: true,
                relationattributeproducts: {
                    include: {
                        valueAttribute: true
                    }
                }
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

        const data = {
            ordersProducts,
            total: allOrdersProducts.length,
            total_pages: Math.ceil(allOrdersProducts.length / limit),
            current_page: page,
        }

        return data;
    }
}

export { OrderProductsService }