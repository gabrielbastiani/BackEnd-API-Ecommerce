import { Request, Response } from 'express'
import { CreateLojaService } from '../../services/loja/CreateLojaService'

class CreateLojaController {
    async handle(req: Request, res: Response) {
        const {
            nameLoja,
            cnpjLoja,
            emailLoja,
            phoneLoja,
            ruaLoja,
            numeroLoja,
            bairroLoja,
            complementoLoja,
            cepLoja,
            cityLoja,
            stateLoja,
        } = req.body;

        const createLojaService = new CreateLojaService();

        const loja = await createLojaService.execute({
            nameLoja,
            cnpjLoja,
            emailLoja,
            phoneLoja,
            ruaLoja,
            numeroLoja,
            bairroLoja,
            complementoLoja,
            cepLoja,
            cityLoja,
            stateLoja,
        });

        return res.json(loja)
    }
}

export { CreateLojaController }