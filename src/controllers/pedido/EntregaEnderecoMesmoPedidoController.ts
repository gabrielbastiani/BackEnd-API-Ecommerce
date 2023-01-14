import { Request, Response } from 'express'
import { EntregaEnderecoMesmoPedidoService } from '../../services/pedido/EntregaEnderecoMesmoPedidoService'

class EntregaEnderecoMesmoPedidoController {
  async handle(req: Request, res: Response){
    const pedido_id = req.query.pedido_id as string;

    const entregaEnderecoMesmoPedidoService = new EntregaEnderecoMesmoPedidoService();

    const pedido = await entregaEnderecoMesmoPedidoService.execute({
      pedido_id
    });

    return res.json(pedido);

  }
}

export { EntregaEnderecoMesmoPedidoController }