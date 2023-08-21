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
                    quantity: 1
                }
            ]
        });

        return result;

    }
}

export { PaymentService }