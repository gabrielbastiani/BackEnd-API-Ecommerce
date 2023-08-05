import prismaClient from "../../../prisma";

interface CuponRequest {
    cuponProduct_id: string;
    product_id: string;
}

class UpdateProductCuponService {
    async execute({ cuponProduct_id, product_id }: CuponRequest) {
        const updateProduct = await prismaClient.cuponProduct.update({
            where: {
                id: cuponProduct_id
            },
            data: {
                product_id: product_id
            }
        })

        return updateProduct;

    }
}

export { UpdateProductCuponService }