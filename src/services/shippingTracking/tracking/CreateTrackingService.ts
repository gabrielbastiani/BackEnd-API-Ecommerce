import prismaClient from "../../../prisma";

interface TrackingRequest {
    shippingTracking_id: string;
    code_tracking: string;
    name_transport: string;
    status_frete: string;
}

class CreateTrackingService {
    async execute({
        shippingTracking_id,
        code_tracking,
        name_transport,
        status_frete
    }: TrackingRequest) {
        const tracking = await prismaClient.tracking.create({
            data: {
                shippingTracking_id: shippingTracking_id,
                code_tracking: code_tracking,
                name_transport: name_transport,
                status_frete: status_frete
            }
        });

        return tracking;

    }
}

export { CreateTrackingService }