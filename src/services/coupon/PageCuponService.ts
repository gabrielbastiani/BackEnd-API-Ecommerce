import prismaClient from '../../prisma';

class PageCuponService {
    async execute(page = 1, limit = 15) {

        const skip = limit * (page - 1);

        const allCupoms = await prismaClient.coupon.findMany({
            orderBy: {
                created_at: 'desc'
            },
            include: {
                cupomsproducts: true,
                coupomsconditionals: true
            }
        });

        const coupons = await prismaClient.coupon.findMany({
            orderBy: {
                created_at: 'desc'
            },
            include: {
                cupomsproducts: true,
                coupomsconditionals: true
            },
            skip,
            take: limit
        });

        const data = {
            coupons,
            total: allCupoms.length,
            total_pages: Math.ceil(allCupoms.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageCuponService }