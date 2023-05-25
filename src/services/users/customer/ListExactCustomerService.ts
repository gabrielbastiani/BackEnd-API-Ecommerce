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
                store: true
            }
        })
        return exactCustomer;
    }
}

export { ListExactCustomerService }