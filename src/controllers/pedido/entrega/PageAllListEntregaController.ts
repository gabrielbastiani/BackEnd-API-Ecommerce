import { Request, Response } from 'express';
import { PageAllListEntregaService } from '../../../services/pedido/entrega/PageAllListEntregaService';

class PageAllListEntregaController {
    async handle(req: Request, res: Response) {
        const pageAllListEntregaService = new PageAllListEntregaService();

        const { page, limit, pedido_id } = req.query;

        const entregaPedido = await pageAllListEntregaService.execute(Number(page), Number(limit), String(pedido_id));

        return res.json(entregaPedido);
    }
}

export { PageAllListEntregaController }