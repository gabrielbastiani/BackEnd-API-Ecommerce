import { Request, Response } from 'express'
import { ListAllVariacaoOfertasService } from '../../services/variacao/ListAllVariacaoOfertasService'

class ListAllVariacaoOfertaController {
    async handle(req: Request, res: Response) {

        const ofertasVariacao = new ListAllVariacaoOfertasService();

        const variacaoOfertas = await ofertasVariacao.execute();

        return res.json(variacaoOfertas);

    }
}

export { ListAllVariacaoOfertaController }