import { Request, Response } from 'express'
import { ListAllProductDestaquesService } from '../../services/product/ListAllProductDestaquesService'

class ListAllProductDestaqueController {
    async handle(req: Request, res: Response) {

        const productDestaque = new ListAllProductDestaquesService();

        const destaqueProduct = await productDestaque.execute();

        return res.json(destaqueProduct);

    }
}

export { ListAllProductDestaqueController }