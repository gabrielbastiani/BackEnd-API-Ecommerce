import prismaClient from "../../prisma";

interface AvalientionRequest {
    product_id: string;
}

class DeleteAvalietionProductIDService {
    async execute({ product_id }: AvalientionRequest) {
        const avalietion = await prismaClient.avalietion.deleteMany({
            where: {
                product_id: product_id
            }
        })

        return avalietion;
    }

}

export { DeleteAvalietionProductIDService }