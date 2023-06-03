import { Request, Response } from 'express';
import { AllPhotosService } from '../../../services/product/photoProduct/AllPhotosService';

class AllPhotosController {
    async handle(req: Request, res: Response) {
        const photoProduct_id = req.query.photoProduct_id as string;
        
        const listPhotosProducts = new AllPhotosService();

        const productsPhotos = await listPhotosProducts.execute({ photoProduct_id });

        return res.json(productsPhotos);
    }
}

export { AllPhotosController }