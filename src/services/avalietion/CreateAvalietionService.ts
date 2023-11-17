import prismaClient from "../../prisma";

interface AvalientionRequest {
    customer_id: string;
    description: string;
    point: string;
    status: string;
    product_id: string;
    store_id: string;
}

class CreateAvalietionService {
    async execute({ customer_id, description, point, product_id, status, store_id }: AvalientionRequest) {
        const avalietion = await prismaClient.avalietion.create({
            data: {
                customer_id: customer_id,
                description: description,
                point: point,
                status: status,
                product_id: product_id,
                store_id: store_id
            }
        });

        const avalietion_data = await prismaClient.avalietion.findFirst({
            orderBy: {
                created_at: 'desc'
            }
        });

        const product = await prismaClient.product.findUnique({
            where: {
                id: product_id
            }
        });

        await prismaClient.notificationAdmin.create({
            data: {
                message: `Avaliação de produto realizado <strong>${product.name}</strong>`,
                link: `http://localhost:3000/avaliacao/${product.slug}/${avalietion_data.id}`,
                store_id: store_id
            }
        });

        return avalietion;

    }
}

export { CreateAvalietionService }