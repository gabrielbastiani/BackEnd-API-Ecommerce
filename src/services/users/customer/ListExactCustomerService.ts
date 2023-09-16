import prismaClient from "../../../prisma";

class ListExactCustomerService {
    async execute({ customer_id }) {
        const exactCustomer = await prismaClient.customer.findUnique({
            where: {
                id: customer_id
            },
            include: {
                avalietions: true,
                deliveryaddresscustomers: true,
                orders: {
                    orderBy: {
                        created_at: 'desc'
                    },
                    include: {
                        orderComments: true,
                        shipmentsTrackings: true
                    }
                },
                payments: true,
                store: true
            }
        })
        return exactCustomer;
    }
}

export { ListExactCustomerService }