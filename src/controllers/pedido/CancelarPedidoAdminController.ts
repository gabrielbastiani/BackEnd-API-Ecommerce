import { Request, Response } from 'express'
import { CancelarPedidoAdminService } from '../../services/pedido/CancelarPedidoAdminService'

class CancelarPedidoAdminController {
  async handle(req: Request, res: Response){
    const pedido_id = req.query.pedido_id as string;

    const cancelarPedidoAdminService = new CancelarPedidoAdminService();

    const pedido = await cancelarPedidoAdminService.execute({
      pedido_id
    });

    return res.json(pedido);

  }
}

export { CancelarPedidoAdminController }