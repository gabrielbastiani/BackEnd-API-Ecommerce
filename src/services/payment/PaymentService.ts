import mercadopago from 'mercadopago';
mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN_TEST
});

interface PaymentRequest {
    description: string;
    email: string;
    type_identification: string;
    type_number: string;
    installments: number;
    payment_method_id: string;
    transaction_amount: number;
    issuer_id: string;
    unit_price: number;
}

class PaymentService {
    async execute({
        description,
        email,
        type_identification,
        type_number,
        installments,
        payment_method_id,
        transaction_amount,
        issuer_id,
        unit_price,
    }: PaymentRequest) {

        const resultCreate = await mercadopago.preferences.create({
            items: [
                {
                    title: "Teste",
                    unit_price: 1000,
                    currency_id: "BRL",
                    quantity: 1,
                    category_id: "Solda",
                    description: "LojaSolda",
                }
            ],
            payer: {
                email: email,
                identification: {
                    type: type_identification,
                    number: type_number
                }
            },
            payment_methods: {
                installments: 12
            },
            back_urls: {
                success: "http://localhost:3001/success",
                failure: "http://localhost:3001/failure",
                pending: "http://localhost:3001/pending"
            },
            notification_url: "https://d7ae-177-69-27-241.ngrok.io/webhook",
        });

        const create = resultCreate.body;

        const result = await mercadopago.payment.save({
            installments: 1,
            payment_method_id: payment_method_id,
            transaction_amount: transaction_amount,
            description: description,
            issuer_id: issuer_id,
            token: issuer_id,
            payer: {
                email: email,
                identification: {
                    type: type_identification,
                    number: type_number
                }
            }
        });

        console.log(create)

        return result;

    }
}

export { PaymentService }