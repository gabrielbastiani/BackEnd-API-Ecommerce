import { Request, Response } from 'express'
import { CancelarPedidoClienteService } from '../../services/pedido/CancelarPedidoClienteService'

class CancelarPedidoClienteController {
  async handle(req: Request, res: Response){
    const pedido_id = req.query.pedido_id as string;

    const cancelarPedidoClienteService = new CancelarPedidoClienteService();

    const pedido = await cancelarPedidoClienteService.execute({
      pedido_id
    });

    return res.json(pedido);

  }
}

export { CancelarPedidoClienteController }