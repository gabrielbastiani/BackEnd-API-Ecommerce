import { Request, Response } from "express";
import { CreateOrderPIXFinishPaymentService } from "../../services/order/CreateOrderPIXFinishPaymentService";

class CreateOrderPIXFinishPaymentController {
    async handle(req: Request, res: Response) {
        const {
            customer_id,
            transaction_id,
            key_payment_pix,
            qr_code_pix,
            key_valid_pix,
            value_pay,
            status_order,
            store_cart_id,
            frete_cupom,
            frete,
            delivery_id,
            order_data_delivery,
            name_cupom,
            cupom,
            peso
        } = req.body;

        const finishOrderPIX = new CreateOrderPIXFinishPaymentService();

        const pix = await finishOrderPIX.execute({
            customer_id,
            transaction_id,
            key_payment_pix,
            qr_code_pix,
            key_valid_pix,
            value_pay,
            status_order,
            store_cart_id,
            frete_cupom,
            frete,
            delivery_id,
            order_data_delivery,
            name_cupom,
            cupom,
            peso
        });

        return res.json(pix);

    }
}

export { CreateOrderPIXFinishPaymentController }