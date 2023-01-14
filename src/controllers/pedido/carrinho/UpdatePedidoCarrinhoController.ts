import { Request, Response } from 'express';
import { UpdatePedidoCarrinhoService } from '../../../services/pedido/carrinho/UpdatePedidoCarrinhoService';

class UpdatePedidoCarrinhoController {
  async handle(req: Request, res: Response) {
    const carrinho_id = req.query.carrinho_id;

    const { pedido_id } = req.body;

    const updateDescription = new UpdatePedidoCarrinhoService();

    const product = await updateDescription.execute({
      carrinho_id,
      pedido_id,
    });

    return res.json(product);
    
  }
}

export { UpdatePedidoCarrinhoController }