import { Request, Response } from 'express';
import { UpdateDescriptionVariacao5Service } from '../../services/variacao/UpdateDescriptionVariacao5Service';

class UpdateDescriptionVariacao5Controller {
  async handle(req: Request, res: Response) {
    const variacao_id = req.query.variacao_id;

    const { descriptionVariacao5 } = req.body;

    const updateDescriptionVariacao5Service = new UpdateDescriptionVariacao5Service();

    const variacao = await updateDescriptionVariacao5Service.execute({
      variacao_id,
      descriptionVariacao5,
    });

    return res.json(variacao);
    
  }
}

export { UpdateDescriptionVariacao5Controller }