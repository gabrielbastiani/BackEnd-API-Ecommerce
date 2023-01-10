import { Request, Response } from 'express';
import { ExportProductService } from '../../services/product/ExportProductService';

class ExportProductController {
    async handle(req: Request, res: Response) {
        const listAllProduct = new ExportProductService();
        const products = await listAllProduct.execute();

        return res.json(products);
    }
}

export { ExportProductController }