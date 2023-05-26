import { Request, Response } from 'express'
import { ListAllProductOfferService } from '../../services/product/ListAllProductOfferService'

class ListAllProductOfferController {
    async handle(req: Request, res: Response) {

        const offerProduct = new ListAllProductOfferService();

        const offer = await offerProduct.execute();

        return res.json(offer);

    }
}

export { ListAllProductOfferController }