import prismaClient from "../../../prisma";

interface TrackingRequest {
    shippingTracking_id: string;
    code_tracking: string;
}

class UpdateCodeTrackingService {
    async execute({ shippingTracking_id, code_tracking }: TrackingRequest) {

        const store = await prismaClient.store.findFirst();

        const code = await prismaClient.tracking.updateMany({
            where: {
                shippingTracking_id: shippingTracking_id
            },
            data: {
                code_tracking: code_tracking
            }
        });

        await prismaClient.notificationAdmin.create({
            data: {
                message: `Código de rastreio <strong>${code_tracking}</strong> atualizado.`,
                store_id: store.id
            }
        });

        return code;

    }
}

export { UpdateCodeTrackingService }