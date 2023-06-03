import { Request, Response } from 'express';
import { FindUniqueImageAttributeService } from '../../../../services/product/relationAttributeProduct/imageAttribute/FindUniqueImageAttributeService';

class FindUniqueImageAttributeController {
    async handle(req: Request, res: Response) {
        const imageAttribute_id = req.query.imageAttribute_id as string;

        const findsImages = new FindUniqueImageAttributeService();

        const finds = await findsImages.execute({ imageAttribute_id });

        return res.json(finds);
    }
}

export { FindUniqueImageAttributeController }