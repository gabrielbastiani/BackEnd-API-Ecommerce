import prismaClient from '../../prisma';

interface ShippingRequest {
    shippingTracking_id: string;
}

class FindShippingTrackingService {
    async execute({ shippingTracking_id }: ShippingRequest) {
        const deliverysRstreio = await prismaClient.shippingTracking.findMany({
            where: {
                id: shippingTracking_id
            }
        })
        return deliverysRstreio;
    }
}

export { FindShippingTrackingService }