import { Request, Response } from 'express';
import { UpdateAlturaProductService } from '../../services/product/UpdateAlturaProductService';

class UpdateAlturaProductController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id;

    const { alturaCM } = req.body;

    const updatealturaCM = new UpdateAlturaProductService();

    const product = await updatealturaCM.execute({
      product_id,
      alturaCM,
    });

    return res.json(product);
    
  }
}

export { UpdateAlturaProductController }