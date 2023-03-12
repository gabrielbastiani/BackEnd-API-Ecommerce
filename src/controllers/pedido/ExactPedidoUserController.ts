import { Request, Response } from 'express';
import { ExactPedidoUserService } from '../../services/pedido/ExactPedidoUserService';

class ExactPedidoUserController {
    async handle(req: Request, res: Response) {
        const { pedido_id } = req.query;
        const listExactPedidoUser = new ExactPedidoUserService();
        const pedidoUser = await listExactPedidoUser.execute({ pedido_id });

        return res.json(pedidoUser);
    }
}

export { ExactPedidoUserController }