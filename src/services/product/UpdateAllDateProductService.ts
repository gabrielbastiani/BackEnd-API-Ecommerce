import prismaClient from "../../prisma";

interface ProductRequest {
    product_id: string;
    order: number;
    descriptionProduct1: string;
    descriptionProduct2: string;
    descriptionProduct3: string;
    descriptionProduct4: string;
    descriptionProduct5: string;
    descriptionProduct6: string;
    preco: number;
    promocao: number;
    sku: string;
    store_id: string;
}

class UpdateAllDateProductService {
    async execute({
        product_id,
        order,
        descriptionProduct1,
        descriptionProduct2,
        descriptionProduct3,
        descriptionProduct4,
        descriptionProduct5,
        descriptionProduct6,
        preco,
        promocao,
        sku,
        store_id,
    }: ProductRequest) {
        const updateProduct = await prismaClient.product.update({
            where: {
                id: String(product_id)
            },
            data: {
                order: order,
                descriptionProduct1: descriptionProduct1,
                descriptionProduct2: descriptionProduct2,
                descriptionProduct3: descriptionProduct3,
                descriptionProduct4: descriptionProduct4,
                descriptionProduct5: descriptionProduct5,
                descriptionProduct6: descriptionProduct6,
                preco: preco,
                promocao: promocao,
                sku: sku,
                store_id: store_id
            }
        })

        return updateProduct;

    }
}

export { UpdateAllDateProductService }