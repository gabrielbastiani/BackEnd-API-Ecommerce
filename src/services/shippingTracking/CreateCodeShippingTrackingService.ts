import prismaClient from "../../prisma";

interface ShippingRequest {
    shippingTracking_id: string;
    code_tracking: string;
    name_transport: string;
}

class CreateCodeShippingTrackingService {
    async execute({
        shippingTracking_id,
        code_tracking,
        name_transport
    }: ShippingRequest) {
        const updateCupon = await prismaClient.shippingTracking.update({
            where: {
                id: shippingTracking_id
            },
            data: {
                code_tracking: code_tracking,
                name_transport: name_transport
            }
        })

        return updateCupon;

    }
}

export { CreateCodeShippingTrackingService }