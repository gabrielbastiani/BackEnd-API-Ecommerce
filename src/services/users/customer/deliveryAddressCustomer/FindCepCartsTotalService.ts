import prismaClient from '../../../../prisma';

interface CartTotalFindRequest {
    customer_id: string;
    cep: string;
}

class FindCepCartsTotalService {
    async execute({ customer_id, cep }: CartTotalFindRequest) {
        const exactCart = await prismaClient.deliveryAddressCustomer.findFirst({
            where: {
                customer_id: customer_id,
                cep: cep
            }
        });

        return exactCart;
    }
}

export { FindCepCartsTotalService }