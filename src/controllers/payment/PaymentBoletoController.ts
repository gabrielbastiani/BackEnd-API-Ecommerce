import { Request, Response } from "express";
import { PaymentBoletoService } from "../../services/payment/PaymentBoletoService";

class PaymentBoletoController {
    async handle(req: Request, res: Response) {
        const {
            customer_id,
            value_pay,
            store_cart_id,
            frete_cupom,
            frete,
            delivery_id,
            order_data_delivery,
            name_cupom,
            cupom,
            peso
        } = req.body;

        const paymentBoleto = new PaymentBoletoService();

        const boleto = await paymentBoleto.execute({
            customer_id,
            value_pay,
            store_cart_id,
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

export { PaymentBoletoController }