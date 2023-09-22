import prisma from "../../prisma";
import prismaClient from "../../prisma";

interface ProductRequest {
    product_id: string;
    stock: number;
}

class StockProductPaymentService {
    async execute({ product_id, stock }: ProductRequest) {
        const updateStock = await prisma.$transaction(async (prisma) => {
            await prisma.product.updateMany({
                where: {
                    id: { in: product_id }
                },
                data: {
                    stock: {
                        decrement: stock
                    }
                }
            });
        });

        return updateStock;

    }
}

export { StockProductPaymentService }