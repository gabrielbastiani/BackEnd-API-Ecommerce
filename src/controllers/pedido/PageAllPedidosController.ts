import { Request, Response } from 'express';
import { PageAllPedidosService } from '../../services/pedido/PageAllPedidosService';

class PageAllPedidosController {
    async handle(req: Request, res: Response) {
        const pageAllPedidos = new PageAllPedidosService();

        const { page, limit } = req.query;

        const pedidosPage = await pageAllPedidos.execute(Number(page), Number(limit));

        return res.json(pedidosPage);
    }
}

export { PageAllPedidosController }