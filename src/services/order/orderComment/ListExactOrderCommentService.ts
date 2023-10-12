import prismaClient from "../../../prisma";

class ListExactOrderCommentService {
    async execute({ order_id }) {
        const exactComment = await prismaClient.orderComment.findMany({
            where: {
                order_id: order_id
            }
        })
        return exactComment;
    }
}

export { ListExactOrderCommentService }