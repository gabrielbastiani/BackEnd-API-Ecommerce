import prismaClient from "../../../prisma";

interface CuponRequest {
    cupon_id: string;
    product_id: string;
}

class CreateCuponProductService {
    async execute({ cupon_id, product_id }: CuponRequest) {
        const productCoupon = await prismaClient.cuponProduct.create({
            data: {
                cupon_id: cupon_id,
                product_id: product_id
            }
        });

        return productCoupon;

    }
}

export { CreateCuponProductService }