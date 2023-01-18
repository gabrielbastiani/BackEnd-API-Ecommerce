import { Request, Response } from "express";
import { UpdatePagamentoService } from "../../services/pagamento/UpdatePagamentoService";

class UpdatePagamentoController {
    async handle(req: Request, res: Response) {
        const {
            valor,
            formaDePagamento,
            parcelas,
            status,
            ruaPagamento,
            numeroPagamento,
            bairroPagamento,
            complementoPagamento,
            cepPagamento,
            cityPagamento,
            statePagamento,
            nomeCompletoPagamento,
            codigoArea,
            phonePagamento,
            dataDeNascimento,
            credit_card_token,
            cpfPagamento,
            pedido_id,
            pagSeguroCode,
            loja_id,
            user_id,
        } = req.body;

        const updatePagamentoService = new UpdatePagamentoService();

        const pagamento = await updatePagamentoService.execute({
            valor,
            formaDePagamento,
            parcelas,
            status,
            ruaPagamento,
            numeroPagamento,
            bairroPagamento,
            complementoPagamento,
            cepPagamento,
            cityPagamento,
            statePagamento,
            nomeCompletoPagamento,
            codigoArea,
            phonePagamento,
            dataDeNascimento,
            credit_card_token,
            cpfPagamento,
            pedido_id,
            pagSeguroCode,
            loja_id,
            user_id,
        })

        return res.json(pagamento);

    }
}

export { UpdatePagamentoController }