import { Request, Response } from 'express';
import { PageAllCarrinhoService } from '../../../services/pedido/carrinho/PageAllCarrinhoService';

class PageAllCarrinhoController {
    async handle(req: Request, res: Response) {
        const pageAllCarrinhoService = new PageAllCarrinhoService();

        const { page, limit, user_id } = req.query;

        const pedidosPage = await pageAllCarrinhoService.execute(Number(page), Number(limit), String(user_id));

        return res.json(pedidosPage);
    }
}

export { PageAllCarrinhoController }