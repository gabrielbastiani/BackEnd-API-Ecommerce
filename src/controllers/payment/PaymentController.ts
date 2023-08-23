import { Request, Response } from "express";
import { PaymentService } from "../../services/payment/PaymentService";

class PaymentController {
    async handle(req: Request, res: Response) {

        const {
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
        } = req.body;

        const payments = new PaymentService();

        const paymentsResults = await payments.execute({
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
        });

        return res.json(paymentsResults);
    }
}

export { PaymentController };