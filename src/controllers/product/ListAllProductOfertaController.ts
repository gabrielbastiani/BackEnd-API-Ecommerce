import { Request, Response } from 'express'
import { ListAllProductOfertasService } from '../../services/product/ListAllProductOfertasService'

class ListAllProductOfertaController {
    async handle(req: Request, res: Response) {

        const ofertasProducts = new ListAllProductOfertasService();

        const productsOfertas = await ofertasProducts.execute();

        return res.json(productsOfertas);

    }
}

export { ListAllProductOfertaController }