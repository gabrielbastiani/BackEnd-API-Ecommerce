import { Request, Response } from 'express';
import { UpdateDescriptionVariacao2Service } from '../../services/variacao/UpdateDescriptionVariacao2Service';

class UpdateDescriptionVariacao2Controller {
  async handle(req: Request, res: Response) {
    const variacao_id = req.query.variacao_id;

    const { descriptionVariacao2 } = req.body;

    const updateDescriptionVariacao2Service = new UpdateDescriptionVariacao2Service();

    const variacao = await updateDescriptionVariacao2Service.execute({
      variacao_id,
      descriptionVariacao2,
    });

    return res.json(variacao);
    
  }
}

export { UpdateDescriptionVariacao2Controller }