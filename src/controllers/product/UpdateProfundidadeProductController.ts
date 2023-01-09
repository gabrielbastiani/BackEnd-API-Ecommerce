import { Request, Response } from 'express';
import { UpdateProfundidadeProductService } from '../../services/product/UpdateProfundidadeProductService';

class UpdateProfundidadeProductController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id;

    const { profundidadeCM } = req.body;

    const updateprofundidadeCM = new UpdateProfundidadeProductService();

    const product = await updateprofundidadeCM.execute({
      product_id,
      profundidadeCM,
    });

    return res.json(product);
    
  }
}

export { UpdateProfundidadeProductController }