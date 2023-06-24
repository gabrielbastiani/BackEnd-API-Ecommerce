import { StatusProduct } from '@prisma/client';
import prismaClient from '../../prisma';

interface FilterPriceRequest {
    priceMin: any;
    priceMax: any;
    /* product_id: any; */
}

class FilterPriceService {
    async execute({ priceMin, priceMax/* , product_id */ }: FilterPriceRequest) {
        const prices = await prismaClient.product.findMany({
            where: {
                status: StatusProduct.Disponivel,
                /* id: { in: product_id } */
            },
            select: {
                price: true
            }
        });

     
        const pricesProducts = prices.map(item => item.price);

        const filterMin = pricesProducts.filter(min => min <= priceMin);
        const filterMax = pricesProducts.filter(max => max >=  priceMax);

        const filterPrices = filterMin.concat(filterMax)
        

        return filterPrices;

    }
}

export { FilterPriceService }