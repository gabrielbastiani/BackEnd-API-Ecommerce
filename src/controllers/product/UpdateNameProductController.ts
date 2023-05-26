import { Request, Response } from 'express';
import { UpdateNameProductService } from '../../services/product/UpdateNameProductService';

class UpdateNameProductController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id as string;

    const { name, slug } = req.body;

    const updateName = new UpdateNameProductService();

    const product = await updateName.execute({
      product_id,
      name,
      slug
    });

    return res.json(product);
    
  }
}

export { UpdateNameProductController }