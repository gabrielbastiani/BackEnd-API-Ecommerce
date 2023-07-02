import { StatusProduct } from '@prisma/client';
import prismaClient from '../../prisma';

class FilterPriceService {
    async execute(page = 1, limit = 20, priceMin: any, priceMax: any) {

        const skip = limit * (page - 1);

        const allPrices = await prismaClient.product.findMany({
            where: {
                status: StatusProduct.Disponivel,
                price: {
                    gte: Number(priceMin),
                    lte: Number(priceMax)
                }
            },
            orderBy: {
                created_at: 'asc'
            },
            include: {
                photoproducts: true
            }
        });

        const prices = await prismaClient.product.findMany({
            where: {
                status: StatusProduct.Disponivel,
                price: {
                    gte: Number(priceMin),
                    lte: Number(priceMax)
                }
            },
            orderBy: {
                created_at: 'asc'
            },
            skip,
            take: limit,
            include: {
                photoproducts: true
            }
        });

        const data = {
            prices,
            total: allPrices.length,
            total_pages: Math.ceil(allPrices.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { FilterPriceService }