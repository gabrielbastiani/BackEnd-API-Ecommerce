import prismaClient from "../../../prisma";

interface CommentsRequest {
    comment: string;
    order_id: string;
    admin_or_employee: string;
    active: string;
}

class CreateOrderCommentService {
    async execute({
        comment,
        order_id,
        admin_or_employee,
        active
    }: CommentsRequest) {
        const comments = await prismaClient.orderComment.create({
            data: {
                order_id: order_id,
                comment: comment,
                admin_or_employee: admin_or_employee,/* @ts-ignore */
                active: active
            }
        })

        return comments;

    }
}

export { CreateOrderCommentService }