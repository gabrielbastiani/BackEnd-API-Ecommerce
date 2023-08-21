import mercadopago from 'mercadopago';

mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN_TEST
});

class WebhookPaymentService {
    async execute() {

        const hooks = await mercadopago.preferences.create({
            notification_url: "https://d7ae-177-69-27-241.ngrok.io/webhook"
        });

        return hooks;

    }
}

export { WebhookPaymentService }