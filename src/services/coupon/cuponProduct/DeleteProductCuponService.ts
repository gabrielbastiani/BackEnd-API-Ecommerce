import prismaClient from "../../../prisma";

interface CupomRequest {
    cuponProduct_id: string;
}

class DeleteProductCuponService {
    async execute({ cuponProduct_id }: CupomRequest) {
        const delProductCupom = await prismaClient.cuponProduct.delete({
            where: {
                id: cuponProduct_id
            }
        });
        
        return delProductCupom;
    }
}

export { DeleteProductCuponService }