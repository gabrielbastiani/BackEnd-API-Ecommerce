/* import mercadopago from 'mercadopago';
import prismaClient from '../../prisma';
mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN_TEST
});

interface PaymentRequest {
    token: string;
    issuer_id: string;
    payment_method_id: string;
    transaction_amount: number;
    installments: number;
    email: string;
    identificationType: string;
    identificationNumber: string;
}

class PaymentService {
    async execute({
        token,
        issuer_id,
        payment_method_id,
        transaction_amount,
        installments,
        email,
        identificationType,
        identificationNumber
    }: PaymentRequest) {

        const buy = await prismaClient.product.create({
            data: {
                token: token,
                issuer_id: issuer_id,
                payment_method_id: payment_method_id,
                transaction_amount: Number(transaction_amount),
                installments: Number(installments),
                description: "Descrição do produto",
                email: email,
                type: identificationType,
                number: identificationNumber,
            }
        });

        console.log(buy)

        return buy;

    }
}

export { PaymentService } */