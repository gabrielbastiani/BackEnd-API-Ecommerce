import mercadopago from 'mercadopago';

mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN_TEST
});

class PaymentService {
    async execute() {

        const result = await mercadopago.preferences.create({
            items: [
                {
                    title: "Tiger 205",
                    unit_price: 3099,
                    currency_id: "BRL",
                    quantity: 1,
                }
            ],
            back_urls: {
                success: "http://localhost:3333/success",
                failure: "http://localhost:3333/failure",
                pending: "http://localhost:3333/pending"
            },
            notification_url: "https://d7ae-177-69-27-241.ngrok.io/webhook"
        });

        return result;

    }
}

export { PaymentService }