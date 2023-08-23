import mercadopago from 'mercadopago';
mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN_TEST
});

interface PaymentRequest {
    payment_id: string;
    unit_price: number;
    email: string;
    type_identification: string;
    type_number: string;
}

class PaymentService {
    async execute({
        payment_id,
        unit_price,
        email,
        type_identification,
        type_number
    }: PaymentRequest) {

        const result = await mercadopago.preferences.create({
            items: [
                {
                    id: payment_id,
                    title: "Teste",
                    unit_price: unit_price,
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

        console.log(result)

        return result;

    }
}

export { PaymentService }