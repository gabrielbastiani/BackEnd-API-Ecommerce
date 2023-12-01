import prismaClient from "../../prisma";

interface NotificationRequest {
    customer_id: string;
    id_order_store: string;
}

class CreateNotificationCommentService {
    async execute({ customer_id, id_order_store }: NotificationRequest) {

        const store = await prismaClient.store.findFirst();

        const notificationCustomer = await prismaClient.notificationCustomer.create({
            data: {
                customer_id: customer_id,
                message: `Comentario realizado no pedido <strong>${id_order_store}</strong>!!!`,
                store_id: store.id
            }
        });

        return notificationCustomer;

    }
}

export { CreateNotificationCommentService }