import prismaClient from "../../../prisma";

interface CupomRequest {
    cuponProduct_id: string;
}

class FindUniqueProductCuponService {
    async execute({ cuponProduct_id }: CupomRequest) {
        const exactCupom = await prismaClient.cuponProduct.findUnique({
            where: {
                id: cuponProduct_id
            }
        })
        return exactCupom;
    }
}

export { FindUniqueProductCuponService }