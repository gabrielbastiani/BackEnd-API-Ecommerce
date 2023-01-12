import { Request, Response } from 'express';
import { UpdateLojaProductService } from '../../services/product/UpdateLojaProductService';

class UpdateLojaProductController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id;

    const { loja_id } = req.body;

    const updatelojaid = new UpdateLojaProductService();

    const product = await updatelojaid.execute({
      product_id,
      loja_id,
    });

    return res.json(product);
    
  }
}

export { UpdateLojaProductController }