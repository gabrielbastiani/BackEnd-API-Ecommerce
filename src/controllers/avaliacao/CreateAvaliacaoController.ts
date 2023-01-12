import { Request, Response } from 'express'
import { CreateAvaliacaoService } from '../../services/avaliacao/CreateAvaliacaoService'

class CreateAvaliacaoController {
    async handle(req: Request, res: Response) {
        const { clientName, description, pontuacao, product_id, loja_id } = req.body;

        const createAvaliacaoService = new CreateAvaliacaoService();

        const avaliacao = await createAvaliacaoService.execute({
            clientName,
            description,
            pontuacao,
            product_id,
            loja_id
        });

        return res.json(avaliacao);

    }
}

export { CreateAvaliacaoController }