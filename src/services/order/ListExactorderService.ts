import prismaClient from "../../prisma"; 

class ListExactorderService {
    async execute({ order_id }) {
        const exactCustomer = await prismaClient.order.findUnique({
            where: {
                id: order_id
            },
            include: {
                customer: true,
                deliveryAddressCustomer: true,
                orderComments: true,
                payment: true,
                shipmentsTrackings: true
            }
        })
        return exactCustomer;
    }
}

export { ListExactorderService }