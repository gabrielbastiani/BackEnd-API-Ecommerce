import { Request, Response } from 'express';
import { UpdatePesoProductService } from '../../services/product/UpdatePesoProductService';

class UpdatePesoProductController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id;

    const { pesoKG } = req.body;

    const updatepesoKG = new UpdatePesoProductService();

    const product = await updatepesoKG.execute({
      product_id,
      pesoKG,
    });

    return res.json(product);
    
  }
}

export { UpdatePesoProductController }