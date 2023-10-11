import prismaClient from "../../prisma";

interface ShippingRequest {
    shippingTracking_id: string;
    code_tracking: string;
}

class CreateCodeShippingTrackingService {
    async execute({
        shippingTracking_id,
        code_tracking
    }: ShippingRequest) {
        const updateCupon = await prismaClient.shippingTracking.update({
            where: {
                id: shippingTracking_id
            },
            data: {
                code_tracking: code_tracking,
            }
        })

        return updateCupon;

    }
}

export { CreateCodeShippingTrackingService }