import { Request, Response } from 'express';
import { FindAvaliacaoService } from '../../services/avaliacao/FindAvaliacaoService';

class FindAvaliacaoController {
    async handle(req: Request, res: Response) {
        const avaliacao_id = req.query.avaliacao_id as string;

        const avaliacaoDados = new FindAvaliacaoService();

        const dadosAvaliacao = await avaliacaoDados.execute({ avaliacao_id });

        return res.json(dadosAvaliacao);
    }
}

export { FindAvaliacaoController }