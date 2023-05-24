import { Request, Response } from 'express'
import { CreateAvaliacaoService } from '../../services/avaliacao/CreateAvaliacaoService'

class CreateAvaliacaoController {
    async handle(req: Request, res: Response) {
        const { admin_id, description, pontuacao, status, product_id, store_id } = req.body;

        const createAvaliacaoService = new CreateAvaliacaoService();

        const avaliacao = await createAvaliacaoService.execute({
            admin_id,
            description,
            pontuacao,
            status,
            product_id,
            store_id
        });

        return res.json(avaliacao);

    }
}

export { CreateAvaliacaoController }