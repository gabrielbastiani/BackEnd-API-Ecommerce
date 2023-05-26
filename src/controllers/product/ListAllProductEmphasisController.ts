import { Request, Response } from 'express'
import { ListAllProductEmphasisService } from '../../services/product/ListAllProductEmphasisService'

class ListAllProductEmphasisController {
    async handle(req: Request, res: Response) {

        const emphasisProduct = new ListAllProductEmphasisService();

        const emphasis = await emphasisProduct.execute();

        return res.json(emphasis);

    }
}

export { ListAllProductEmphasisController }