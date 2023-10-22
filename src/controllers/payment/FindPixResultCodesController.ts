import { Request, Response } from "express";
import axios from "axios";

class FindPixResultCodesController {
    async handle(req: Request, res: Response) {

        const id_pay_pix = req.query.id_pay_pix as string;

        console.log(id_pay_pix)

        const options = {
            method: 'GET',
            url: `https://sandbox.asaas.com/api/v3/payments/${id_pay_pix}/pixQrCode`,
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                access_token: process.env.TOKEN_ASSAS
            }
        };

        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                return res.json(response.data);
            })
            .catch(function (error) {
                console.error(error);
                return res.json(error);
            });

    }
}

export { FindPixResultCodesController };