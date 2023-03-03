import { Request, Response } from 'express';
import { UpdateAllDescriptionVariacaoService } from '../../services/variacao/UpdateAllDescriptionVariacaoService';

class UpdateAllDescriptionVariacaoController {
  async handle(req: Request, res: Response) {
    const variacao_id = req.query.variacao_id;

    const { descriptionVariacao1 } = req.body;
    const { descriptionVariacao2 } = req.body;
    const { descriptionVariacao3 } = req.body;
    const { descriptionVariacao4 } = req.body;
    const { descriptionVariacao5 } = req.body;
    const { descriptionVariacao6 } = req.body;

    const updateDescriptionVariacao = new UpdateAllDescriptionVariacaoService();

    const variacao = await updateDescriptionVariacao.execute({
      variacao_id,
      descriptionVariacao1,
      descriptionVariacao2,
      descriptionVariacao3,
      descriptionVariacao4,
      descriptionVariacao5,
      descriptionVariacao6
    });

    return res.json(variacao);
    
  }
}

export { UpdateAllDescriptionVariacaoController }