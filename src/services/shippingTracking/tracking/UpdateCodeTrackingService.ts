import prismaClient from "../../../prisma";

interface TrackingRequest {
    shippingTracking_id: string;
    code_tracking: string;
}

class UpdateCodeTrackingService {
    async execute({ shippingTracking_id, code_tracking }: TrackingRequest) {
        const code = await prismaClient.tracking.updateMany({
            where: {
                shippingTracking_id: shippingTracking_id
            },
            data: {
                code_tracking: code_tracking
            }
        });

        return code;

    }
}

export { UpdateCodeTrackingService }