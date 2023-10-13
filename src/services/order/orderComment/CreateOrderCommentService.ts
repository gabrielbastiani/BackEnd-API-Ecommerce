import prismaClient from "../../../prisma";

interface CommentsRequest {
    comment: string;
    order_id: string;
    user_comment: string;
    active: string;
}

class CreateOrderCommentService {
    async execute({
        comment,
        order_id,
        user_comment,
        active
    }: CommentsRequest) {
        const comments = await prismaClient.orderComment.create({
            data: {
                order_id: order_id,
                comment: comment,
                user_comment: user_comment,/* @ts-ignore */
                active: active
            }
        })

        return comments;

    }
}

export { CreateOrderCommentService }