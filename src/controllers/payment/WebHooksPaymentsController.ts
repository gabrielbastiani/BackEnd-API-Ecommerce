import { Request, Response } from "express";
import axios from "axios";

class WebHooksPaymentsController {
    async handle(req: Request, res: Response) {

        const options = {
            method: 'POST',
            url: 'https://sandbox.asaas.com/api/v3/webhook/bill',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                access_token: '$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDAwNDQ5NDM6OiRhYWNoXzg0MGViZDYyLWJjNWQtNDQ1Yy1hYzBiLWEwNjdkZGZjMWQ4Mg=='
            },
            data: {
                url: 'https://www.assaswebhooks.builderseunegocioonline.com.br/webhook/asaas',
                email: 'gabriel.bastiani@sumig.com',
                interrupted: false,
                enabled: true,
                apiVersion: 3,
                authToken: '5tLxsL6uoN'
            }
        };

        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });

    }
}

export { WebHooksPaymentsController };