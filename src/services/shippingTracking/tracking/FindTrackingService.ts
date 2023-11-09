import prismaClient from '../../../prisma';

interface TrackingRequest {
    shippingTracking_id: string;
}

class FindTrackingService {
    async execute({ shippingTracking_id }: TrackingRequest) {
        const deliverysRstreio = await prismaClient.tracking.findMany({
            where: {
                shippingTracking_id: shippingTracking_id
            },
            orderBy: {
                created_at: 'asc'
            }
        })
        return deliverysRstreio;
    }
}

export { FindTrackingService }