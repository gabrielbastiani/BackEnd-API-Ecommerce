import prismaClient from "../../prisma"; 

class DatesPaymentsService {
    async execute() {
        const paymentsDates = await prismaClient.order.findMany({
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

        return paymentsDates;
        
    }
}

export { DatesPaymentsService }