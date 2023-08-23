import mercadopago from 'mercadopago';
mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN_TEST
});

interface PaymentRequest {
    payment_id: string;
    title: string;
    unit_price: number;
    category_id: string;
    description: string;
    picture_url: string;
    name: string;
    surname: string;
    email: string;
    area_code: string;
    number: number;
    type_identification: string;
    type_number: string;
    street_name: string;
    street_number: number;
    zip_code: string;
}

class PaymentService {
    async execute({
        payment_id,
        title,
        unit_price,
        category_id,
        description,
        picture_url,
        name,
        surname,
        email,
        area_code,
        number,
        type_identification,
        type_number,
        street_name,
        street_number,
        zip_code
    }: PaymentRequest) {

        const result = await mercadopago.preferences.create({
            items: [
                {
                    id: payment_id,
                    title: title,
                    unit_price: unit_price,
                    currency_id: "BRL",
                    quantity: 1,
                    category_id: category_id,
                    description: description,
                    picture_url: picture_url
                }
            ],
            payer: {
                name: name,
                surname: surname,
                email: email,
                phone: {
                    area_code: area_code,
                    number: number,
                },
                identification: {
                    type: type_identification,
                    number: type_number
                },
                address: {
                    street_name: street_name,
                    street_number: street_number,
                    zip_code: zip_code
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