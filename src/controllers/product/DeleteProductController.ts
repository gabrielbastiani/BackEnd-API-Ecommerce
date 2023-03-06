import { Request, Response } from "express";
import { DeleteProductService } from "../../services/product/DeleteProductService";
import fs from 'fs';

class DeleteProductController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id as string;
    const { variacao_id } = req.body;

    const deleteProductService = new DeleteProductService();

    const product = await deleteProductService.execute({
      product_id,
      variacao_id
    });

    /* fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + ); */

    return res.json(product);
  }
}

export { DeleteProductController };