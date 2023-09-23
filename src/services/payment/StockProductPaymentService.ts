import prismaClient from "../../prisma";

interface ProductRequest {
    product_id: string;
}

class StockProductPaymentService {
    async execute({ product_id }: ProductRequest) {

        const dataProduct = await prismaClient.cart.findMany({
            where: {
                product_id: {
                    in: product_id
                }
            }
        });

        for (let index = 0; index < dataProduct.length; index++) {

            const element = dataProduct[index];

            await prismaClient.product.updateMany({
                where: {
                    id: {
                        in: element.product_id
                    }
                },
                data: {
                    stock: {
                        decrement: element.amount
                    },
                    reservedAmount: {
                        increment: element.amount
                    }
                }
            });

        }

        return dataProduct;

    }
}

export { StockProductPaymentService }