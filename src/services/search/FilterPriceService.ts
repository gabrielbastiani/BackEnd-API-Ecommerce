import { StatusProduct } from '@prisma/client';
import prismaClient from '../../prisma';

interface FilterPriceRequest {
    priceMin: any;
    priceMax: any;
}

class FilterPriceService {
    async execute({ priceMin, priceMax }: FilterPriceRequest) {
        const prices = await prismaClient.product.findMany({
            where: {
                status: StatusProduct.Disponivel,
                price: {
                    gte: Number(priceMin),
                    lte: Number(priceMax)
                }
            },
            include: {
                photoproducts: true
            }
        });

        if (priceMin < priceMax) {
            return prices
        } else {
            throw new Error("O valor do preço minimo não pode ser maior que o valor do preço máximo!!!");
        }

    }
}

export { FilterPriceService }