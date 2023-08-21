import mercadopago from 'mercadopago';

mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN_TEST
});

class PaymentService {
    async execute() {

        const result = await mercadopago.preferences.create({
            items: [
                {
                    id: '54365454543',
                    title: "Maquina de Solda Hawk",
                    unit_price: 3099,
                    currency_id: "BRL",
                    quantity: 12,
                    category_id: 'Maquinas de Solda',
                    description: "dfsfsfsffsfd",
                    picture_url: "http://localhost:3001/_next/image?url=http%3A%2F%2Flocalhost%3A3333%2Ffiles%2Fa412a3aad8af04a4018463cdfaf74754-hawk255-2.png&w=640&q=75"
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