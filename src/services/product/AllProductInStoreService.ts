import { StatusProduct } from '@prisma/client';
import prismaClient from '../../prisma';

class AllProductInStoreService {
    async execute() {
        const allProduct = await prismaClient.product.findMany({
            where: {
                disponibilidade: StatusProduct.Disponivel
            },
            include: {
                relationproductcategories: true,
                relationproductatributos: true,
                loja: true,
                photoproducts: true,
                variacoes: true,
                photovariacoes: true,
                avaliacoes: true,
            }
        });
        return allProduct;
    }
}

export { AllProductInStoreService }