import { Request, Response } from 'express';
import { UpdateEstoqueProductService } from '../../services/product/UpdateEstoqueProductService';

class UpdateEstoqueProductController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id;

    const { estoque } = req.body;

    const updateestoque = new UpdateEstoqueProductService();

    const product = await updateestoque.execute({
      product_id,
      estoque,
    });

    return res.json(product);
    
  }
}

export { UpdateEstoqueProductController }