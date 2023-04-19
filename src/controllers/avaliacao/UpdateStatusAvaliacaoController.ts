import { Request, Response } from 'express';
import { UpdateStatusAvaliacaoService } from '../../services/avaliacao/UpdateStatusAvaliacaoService';

class UpdateStatusAvaliacaoController {
    async handle(req: Request, res: Response) {
        const avaliacao_id = req.query.avaliacao_id;

        const { status } = req.body;

        const updateAvaliacao = new UpdateStatusAvaliacaoService();

        const avaliacao = await updateAvaliacao.execute({
            avaliacao_id,
            status
        });

        return res.json(avaliacao);

    }
}

export { UpdateStatusAvaliacaoController }