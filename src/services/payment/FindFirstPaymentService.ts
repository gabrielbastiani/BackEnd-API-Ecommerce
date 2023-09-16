import prismaClient from "../../prisma";

interface PaymentRequest {
    customer_id: string;
}

class FindFirstPaymentService {
    async execute({ customer_id }: PaymentRequest) {
        const paymentFirst = await prismaClient.payment.findFirst({
            where: {
                customer_id: customer_id
            },
            orderBy: {
                created_at: 'desc'
            },
            include: {
                orders: {
                    include: {
                        payment: true
                    }
                }
            }
        });

        return paymentFirst;

    }
}

export { FindFirstPaymentService }