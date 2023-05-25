
import prismaClient from '../../../prisma';

class PageListAllCustomerService {
    async execute(page = 1, limit = 5) {

        const skip = limit * (page - 1);

        const allCustomers = await prismaClient.customer.findMany({
            orderBy: {
                created_at: 'desc'
            },
            include: {
                avalietions: true,
                deliveryaddresscustomers: true,
                store: true,
                _count: true
            }
        });

        const customers = await prismaClient.customer.findMany({
            orderBy: {
                created_at: 'desc'
            },
            include: {
                avalietions: true,
                deliveryaddresscustomers: true,
                store: true,
                _count: true
            },
            skip,
            take: limit,
        });

        const data = {
            customers,
            total: allCustomers.length,
            total_pages: Math.ceil(allCustomers.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageListAllCustomerService }