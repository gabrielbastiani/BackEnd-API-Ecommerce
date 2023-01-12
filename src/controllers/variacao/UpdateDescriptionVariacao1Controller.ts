import { Request, Response } from 'express';
import { UpdateDescriptionVariacao1Service } from '../../services/variacao/UpdateDescriptionVariacao1Service';

class UpdateDescriptionVariacao1Controller {
  async handle(req: Request, res: Response) {
    const variacao_id = req.query.variacao_id;

    const { descriptionVariacao1 } = req.body;

    const updateDescriptionVariacao1Service = new UpdateDescriptionVariacao1Service();

    const variacao = await updateDescriptionVariacao1Service.execute({
      variacao_id,
      descriptionVariacao1,
    });

    return res.json(variacao);
    
  }
}

export { UpdateDescriptionVariacao1Controller }