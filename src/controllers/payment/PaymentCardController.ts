import { Request, Response } from "express";
import { PaymentCardService } from "../../services/payment/PaymentCardService";

class PaymentCardController {
    async handle(req: Request, res: Response) {
        const {
            holderName,
            number_card,
            expiryMonth,
            expiryYear,
            ccv,
            cardholder_identification_cpfCnpj,
            cpfCnpj,
            customer_id,
            value_pay,
            installmentCount,
            installmentValue,
            store_cart_id,
            frete_cupom,
            frete,
            delivery_id,
            order_data_delivery,
            name_cupom,
            cupom,
            peso
        } = req.body;

        const paymentCard = new PaymentCardService();

        const card = await paymentCard.execute({
            holderName,
            number_card,
            expiryMonth,
            expiryYear,
            ccv,
            cardholder_identification_cpfCnpj,
            cpfCnpj,
            customer_id,
            value_pay,
            installmentCount,
            installmentValue,
            store_cart_id,
            frete_cupom,
            frete,
            delivery_id,
            order_data_delivery,
            name_cupom,
            cupom,
            peso
        });

        return res.json(card);

    }
}

export { PaymentCardController }