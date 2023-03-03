import { Request, Response } from 'express';
import { ListExactVariacaoService } from '../../services/variacao/ListExactVariacaoService';

class ListExactVariacaoController {
    async handle(req: Request, res: Response) {
        const { variacao_id } = req.query;
        const listVariacaoExact = new ListExactVariacaoService();
        const variacaos = await listVariacaoExact.execute({ variacao_id });

        return res.json(variacaos);
    }
}

export { ListExactVariacaoController }