import { Request, Response } from 'express'
import { ListAllVariacaoDestaquesService } from '../../services/variacao/ListAllVariacaoDestaquesService'

class ListAllVariacaoDestaqueController {
    async handle(req: Request, res: Response) {

        const variacaoDestaque = new ListAllVariacaoDestaquesService();

        const destaqueVariacao = await variacaoDestaque.execute();

        return res.json(destaqueVariacao);

    }
}

export { ListAllVariacaoDestaqueController }