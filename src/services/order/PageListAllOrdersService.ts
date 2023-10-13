import prismaClient from "../../prisma";

class PageListAllOrdersService {
    async execute(page = 1, limit = 10) {

        const skip = limit * (page - 1);

        const allOrders = await prismaClient.order.findMany({
            include: {
                customer: true,
                payment: true,
                shipmentsTrackings: true,
                deliveryAddressCustomer: true,
                orderComments: true,
                statusOrder: true
            },
            orderBy: {
                created_at: 'desc'
            }
        });

        const orders = await prismaClient.order.findMany({
            include: {
                customer: true,
                payment: true,
                shipmentsTrackings: true,
                deliveryAddressCustomer: true,
                orderComments: true,
                statusOrder: true
            },
            orderBy: {
                created_at: 'desc'
            },
            skip,
            take: limit,
        });

        const data = {
            orders,
            total: allOrders.length,
            total_pages: Math.ceil(allOrders.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageListAllOrdersService }