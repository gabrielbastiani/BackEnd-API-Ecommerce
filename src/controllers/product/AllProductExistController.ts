import { Request, Response } from 'express';
import { AllProductExistService } from '../../services/product/AllProductExistService';

class AllProductExistController {
    async handle(req: Request, res: Response) {
        
        const listProducts = new AllProductExistService();

        const allProducts = await listProducts.execute();

        return res.json(allProducts);
    }
}

export { AllProductExistController }