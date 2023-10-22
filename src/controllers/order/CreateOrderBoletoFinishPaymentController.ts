import { Request, Response } from "express";
import { CreateOrderBoletoFinishPaymentService } from "../../services/order/CreateOrderBoletoFinishPaymentService";

class CreateOrderBoletoFinishPaymentController {
    async handle(req: Request, res: Response) {
        const {
            customer_id,
            transaction_id,
            value_pay,
            status_order,
            expiration_boleto,
            store_cart_id,
            external_resource_url,
            frete_cupom,
            frete,
            delivery_id,
            order_data_delivery,
            name_cupom,
            cupom,
            peso
        } = req.body;

        const finishOrderBoleto = new CreateOrderBoletoFinishPaymentService();

        const boleto = await finishOrderBoleto.execute({
            customer_id,
            transaction_id,
            value_pay,
            status_order,
            expiration_boleto,
            store_cart_id,
            external_resource_url,
            frete_cupom,
            frete,
            delivery_id,
            order_data_delivery,
            name_cupom,
            cupom,
            peso
        });

        return res.json(boleto);

    }
}

export { CreateOrderBoletoFinishPaymentController }