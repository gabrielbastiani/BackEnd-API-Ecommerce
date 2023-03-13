import { Request, Response } from 'express';
import { PageAllPedidosUserService } from '../../services/pedido/PageAllPedidosUserService';

class PageAllPedidosUserController {
    async handle(req: Request, res: Response) {
        const pageAllPedidosUserService = new PageAllPedidosUserService();

        const { page, limit, user_id } = req.query;

        const pedidosPage = await pageAllPedidosUserService.execute(Number(page), Number(limit), user_id);

        return res.json(pedidosPage);
    }
}

export { PageAllPedidosUserController }