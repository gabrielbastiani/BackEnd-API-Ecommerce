import { Request, Response } from 'express';
import { NextCategoryRelationBlockService } from '../../services/relationProductCategory/NextCategoryRelationBlockService';

class NextCategoryRelationBlockController {
    async handle(req: Request, res: Response) {
        const nextBlockRelation = new NextCategoryRelationBlockService();

        const { page, limit, product_id } = req.query;

        const blockRelation = await nextBlockRelation.execute(Number(page), Number(limit), product_id);

        return res.json(blockRelation);
    }
}

export { NextCategoryRelationBlockController }