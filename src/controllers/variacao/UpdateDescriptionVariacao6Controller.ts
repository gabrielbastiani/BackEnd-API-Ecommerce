import { Request, Response } from 'express';
import { UpdateDescriptionVariacao6Service } from '../../services/variacao/UpdateDescriptionVariacao6Service';

class UpdateDescriptionVariacao6Controller {
  async handle(req: Request, res: Response) {
    const variacao_id = req.query.variacao_id;

    const { descriptionVariacao6 } = req.body;

    const updateDescriptionVariacao6Service = new UpdateDescriptionVariacao6Service();

    const variacao = await updateDescriptionVariacao6Service.execute({
      variacao_id,
      descriptionVariacao6,
    });

    return res.json(variacao);
    
  }
}

export { UpdateDescriptionVariacao6Controller }