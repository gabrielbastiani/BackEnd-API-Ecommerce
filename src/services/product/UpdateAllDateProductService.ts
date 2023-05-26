import prismaClient from "../../prisma";

interface ProductRequest {
    product_id: string;
    price: number;
    promotion: number;
    sku: string;
    stock: number;
    weight: string;
    width: string;
    height: string;
    depth: string;
    amount: number;
    reservedAmount: number;
    urlVideo: string;
    buyTogether_id: string;
    store_id: string;
}

class UpdateAllDateProductService {
    async execute({
        product_id,
        price,
        promotion,
        sku,
        stock,
        weight,
        width,
        height,
        depth,
        amount,
        reservedAmount,
        urlVideo,
        buyTogether_id,
        store_id,
    }: ProductRequest) {
        const updateProduct = await prismaClient.product.update({
            where: {
                id: product_id
            },
            data: {
                price: price,
                promotion: promotion,
                sku: sku,
                stock: stock,
                weight: weight,
                width: width,
                height: height,
                depth: depth,
                amount: amount,
                reservedAmount: reservedAmount,
                urlVideo: urlVideo,
                buyTogether_id: buyTogether_id,
                store_id: store_id
            }
        })

        return updateProduct;

    }
}

export { UpdateAllDateProductService }