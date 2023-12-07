import prismaClient from "../../prisma"; 

class DatesPaymentsService {
    async execute() {
        const orders = await prismaClient.order.findMany({
            orderBy: {
                created_at: 'desc'
            },
            include: {
                customer: true,
                deliveryAddressCustomer: true,
                orderComments: true,
                payment: {
                    include: {
                        orders: true
                    }
                },
                shipmentsTrackings: true,
                statusOrder: true
            }
        });

        const payments = await prismaClient.payment.findMany({
            orderBy: {
                created_at: 'desc'
            },
            include: {
                customer: true,
                orders: true,
            }
        });

        const statusOrder = await prismaClient.statusOrder.findMany({
            orderBy: {
                created_at: 'desc'
            },
            include: {
                order: {
                    include: {
                        payment: true
                    }
                }
            }
        });

        const product = await prismaClient.product.findMany({
            orderBy: {
                created_at: 'desc'
            }
        });

        const visitedUser = await prismaClient.visitedUser.findMany({
            orderBy: {
                created_at: 'desc'
            }
        });

        const data = {
            orders,
            payments,
            statusOrder,
            product,
            visitedUser
        }

        return data;
        
    }
}

export { DatesPaymentsService }