import { Request, Response } from "express";
import { CreateOrderCardFinishPaymentService } from "../../services/order/CreateOrderCardFinishPaymentService";

class CreateOrderCardFinishPaymentController {
    async handle(req: Request, res: Response) {
        const {
            store_cart_id,
            frete_cupom,
            frete,
            delivery_id,
            order_data_delivery,
            name_cupom,
            cupom,
            peso,
            number_card,
            value_pay,
            installmentCount,
            value_pay_finish,
            customer_id,
            transaction_id,
            last_number_credit_card,
            expiration_month,
            expiration_year,
            date_created,
            cardholder_name,
            cardholder_identification_cpfCnpj,
            cardholder_cpfCnpj,
            flag_credit_card,
            status_order
        } = req.body;

        const finishOrderCard = new CreateOrderCardFinishPaymentService();

        const card = await finishOrderCard.execute({
            store_cart_id,
            frete_cupom,
            frete,
            delivery_id,
            order_data_delivery,
            name_cupom,
            cupom,
            peso,
            number_card,
            value_pay,
            installmentCount,
            value_pay_finish,
            customer_id,
            transaction_id,
            last_number_credit_card,
            expiration_month,
            expiration_year,
            date_created,
            cardholder_name,
            cardholder_identification_cpfCnpj,
            cardholder_cpfCnpj,
            flag_credit_card,
            status_order
        });

        return res.json(card);

    }
}

export { CreateOrderCardFinishPaymentController }