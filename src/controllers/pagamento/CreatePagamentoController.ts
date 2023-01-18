import { Request, Response } from "express";
import { CreatePagamentoService } from "../../services/pagamento/CreatePagamentoService";

class CreatePagamentoController {
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

        const createPagamentoService = new CreatePagamentoService();

        const pagamento = await createPagamentoService.execute({
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

export { CreatePagamentoController }