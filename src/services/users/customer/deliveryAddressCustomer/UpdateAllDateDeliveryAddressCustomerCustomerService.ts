import prismaClient from "../../../../prisma";

interface DeliveryRequest {
    deliveryAddressCustomer_id: string;
    address: string;
    number: string;
    complement: string;
    reference: string;
    neighborhood: string;
    cep: string;
    city: string;
    state: string;
    phone: string;
}

class UpdateAllDateDeliveryAddressCustomerCustomerService {
    async execute({
        deliveryAddressCustomer_id,
        address,
        number,
        complement,
        reference,
        neighborhood,
        cep,
        city,
        state,
        phone
    }: DeliveryRequest) {
        const updateDelivery = await prismaClient.deliveryAddressCustomer.update({
            where: {
                id: deliveryAddressCustomer_id,
            },
            data: {
                address: address,
                number: number,
                complement: complement,
                reference: reference,
                neighborhood: neighborhood,
                cep: cep,
                city: city,
                state: state,
                phone: phone,
            }
        })

        return updateDelivery;

    }

}

export { UpdateAllDateDeliveryAddressCustomerCustomerService }