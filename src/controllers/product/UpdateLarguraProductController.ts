import { Request, Response } from 'express';
import { UpdateLarguraProductService } from '../../services/product/UpdateLarguraProductService';

class UpdateLarguraProductController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id;

    const { larguraCM } = req.body;

    const updatelarguraCM = new UpdateLarguraProductService();

    const product = await updatelarguraCM.execute({
      product_id,
      larguraCM,
    });

    return res.json(product);
    
  }
}

export { UpdateLarguraProductController }